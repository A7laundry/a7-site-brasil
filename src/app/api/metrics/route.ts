import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const METRICS_PATH = join(process.cwd(), "src/data/metrics.json");

export async function GET() {
  try {
    const data = JSON.parse(readFileSync(METRICS_PATH, "utf-8"));
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ funil: [] }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const current = JSON.parse(readFileSync(METRICS_PATH, "utf-8"));
    const updated = { ...current, ...body, updatedAt: new Date().toISOString().split("T")[0] };
    writeFileSync(METRICS_PATH, JSON.stringify(updated, null, 2));
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
