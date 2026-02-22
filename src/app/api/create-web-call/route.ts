import { NextRequest, NextResponse } from "next/server";
import Retell from "retell-sdk";

const retell = new Retell({
    apiKey: process.env.RETELL_API_KEY || "",
});

export async function POST(req: NextRequest) {
    try {
        const agentId = process.env.RETELL_AGENT_ID;

        if (!agentId) {
            return NextResponse.json(
                { error: "RETELL_AGENT_ID is not configured" },
                { status: 500 }
            );
        }

        const response = await retell.call.createWebCall({
            agent_id: agentId,
        });

        return NextResponse.json(response);
    } catch (error: any) {
        console.error("Error creating web call:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create web call" },
            { status: 500 }
        );
    }
}
