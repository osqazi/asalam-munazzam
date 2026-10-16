import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { isAdmin, originAllowed } from "@/lib/admin-auth";
export const runtime="nodejs";
const allowed=new Map([["image/jpeg",".jpg"],["image/png",".png"],["image/webp",".webp"]]);
export async function POST(request:Request){
  if(process.env.VERCEL)return NextResponse.json({error:"Upload assets in the local dashboard, then deploy manually. Vercel's filesystem is not persistent."},{status:409});
  if(!await isAdmin())return NextResponse.json({error:"Unauthorized"},{status:401});
  if(!originAllowed(request))return NextResponse.json({error:"Request origin rejected."},{status:403});
  try{
    const form=await request.formData();const file=form.get("file");const year=Number(form.get("year"));const group=form.get("group");
    if(!(file instanceof File)||file.size===0||file.size>10*1024*1024)throw new Error("Choose a file under 10 MB.");
    if(!Number.isInteger(year)||year<2020||year>2100)throw new Error("Invalid season year.");
    if(group!=="partners"&&group!=="packages"&&group!=="notifications")throw new Error("Invalid asset folder.");
    const ext=allowed.get(file.type);if(!ext)throw new Error("Only JPG, PNG, WebP, or PDF files are accepted.");
    const bytes=Buffer.from(await file.arrayBuffer());
    const valid=file.type==="image/jpeg"?bytes[0]===0xff&&bytes[1]===0xd8&&bytes[2]===0xff:file.type==="image/png"?bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])):bytes.toString("ascii",0,4)==="RIFF"&&bytes.toString("ascii",8,12)==="WEBP";
    if(!valid)throw new Error("The file content does not match its declared image format.");
    const relative=`/seasons/${year}/${group}/${randomUUID()}${ext}`;const target=path.join(process.cwd(),"public",relative);
    await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,bytes,{flag:"wx"});
    return NextResponse.json({path:relative});
  }catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Upload failed."},{status:400});}
}
