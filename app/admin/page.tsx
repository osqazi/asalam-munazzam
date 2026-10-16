import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import AdminDashboard from "./ui";
export const metadata = { title: "Season Admin", robots: { index: false, follow: false } };
export default async function AdminPage() { if (!await isAdmin()) redirect("/admin/login"); return <AdminDashboard />; }
