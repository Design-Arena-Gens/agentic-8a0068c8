import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  monthlyAdSpend?: string;
  primaryObjective?: string;
  frustrations?: string;
};

const WEBHOOK_URL = process.env.LEADS_WEBHOOK_URL;

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  if (!body.email || !body.name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "adcraze-lead",
          receivedAt: new Date().toISOString(),
          payload: body,
        }),
      });
    } catch (error) {
      console.error("Failed to forward lead", error);
      return NextResponse.json({ error: "Unable to forward lead" }, { status: 502 });
    }
  }

  return NextResponse.json({ success: true });
}
