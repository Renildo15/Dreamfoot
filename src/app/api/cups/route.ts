/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const cups = await prisma.cup.findMany({
            include: {
                groups: true
            }
        })

        if (!cups) {
            return NextResponse.json({error: "Cups not found"}, {status: 404})
        }

        return NextResponse.json({cups}, {status: 200})
    } catch (error) {
        console.error("Error fetching cups:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}