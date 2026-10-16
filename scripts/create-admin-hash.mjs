import { randomBytes, scryptSync } from "node:crypto";
import { stdin, stdout } from "node:process";

function readPassword() {
  return new Promise((resolve, reject) => {
    if (!stdin.isTTY) return reject(new Error("Run this script in an interactive terminal."));
    let password = "";
    stdout.write("New admin password (14+ characters): ");
    stdin.setRawMode(true); stdin.setEncoding("utf8"); stdin.resume();
    const onData = chunk => {
      for (const char of chunk) {
        if (char === "\u0003") { stdin.setRawMode(false); stdout.write("\n"); process.exit(1); }
        if (char === "\r" || char === "\n") { stdin.off("data", onData); stdin.setRawMode(false); stdin.pause(); stdout.write("\n"); resolve(password); return; }
        if (char === "\u007f" || char === "\b") password = password.slice(0, -1);
        else if (char >= " ") password += char;
      }
    };
    stdin.on("data", onData);
  });
}
try {
  const password = await readPassword();
  if (password.length < 14) throw new Error("Use at least 14 characters.");
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  console.log(`ADMIN_PASSWORD_HASH=${salt}:${hash}`);
} catch (error) { console.error(error instanceof Error ? error.message : "Could not create password hash."); process.exitCode = 1; }
