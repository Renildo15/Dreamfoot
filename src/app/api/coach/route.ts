import { prisma } from "@/lib/prisma";
import { CreateCoach } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
   try {
    const body = await request.json()
    const { name, nationality, preferenceFormation, tactics }: CreateCoach = body;
    
    if (!name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!nationality) {
        return NextResponse.json({error: "Nationality is required"}, {status: 400})
    }

    if (!preferenceFormation) {
        return NextResponse.json({error: "Formation is required"}, {status: 400})
    }
    const newCoach = await prisma.coach.create({
        data: { name, nationality, preferenceFormation, tactics }
    });

    return NextResponse.json(newCoach, {status: 201})

   } catch (error) {
        console.error("Error creating coach:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
   }

}