import { NextResponse } from "next/server";
import { readdirSync, existsSync } from "fs";
import { join } from "path";

// Known non-LP directories to exclude
const EXCLUDED = new Set([
  "api", "blog", "growth-engine", "lavanderia", "favicon.ico",
  "layout.tsx", "page.tsx", "globals.css", "not-found.tsx",
  "version-a", "version-b", "version-c", "version-d", "version-e", "version-f",
]);

export async function GET() {
  try {
    const appDir = join(process.cwd(), "src/app");
    const entries = readdirSync(appDir, { withFileTypes: true });

    const activeLPs: string[] = [];

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (EXCLUDED.has(entry.name)) continue;
      if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
      if (entry.name.startsWith("[")) continue; // dynamic routes

      const pageFile = join(appDir, entry.name, "page.tsx");
      if (existsSync(pageFile)) {
        activeLPs.push(`/${entry.name}`);
      }
    }

    return NextResponse.json({
      activeLPs: activeLPs.sort(),
      count: activeLPs.length,
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ activeLPs: [], count: 0, error: String(error) }, { status: 500 });
  }
}
