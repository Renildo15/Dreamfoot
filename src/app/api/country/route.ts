import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(request: Request) {
    try {
        const countries = await prisma.country.findMany({
            include: {
                cups: true,
                leagues: true
            }
        })

        if(!countries) {
            return NextResponse.json({error: "Countries not found"}, {status: 404})
        }

        return NextResponse.json({countries}, {status: 200})
    } catch (error) {
        console.error("Error fetching countries:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}