import { prisma } from "@/lib/prisma";
import { CreateChampionship } from "@/types/championship";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body: CreateChampionship = await request.json()
        const { name, format, is_active, teams_count, type, logo } = body;

        if (!name) {
            return NextResponse.json({ error : "Name is required"}, { status: 404})
        }

        if (!format) {
            return NextResponse.json({ error : "Format is required"}, { status: 404})
        }
        if (!type) {
            return NextResponse.json({ error : "Type is required"}, { status: 404})
        }
        if (teams_count < 2) {
            return NextResponse.json({ error : "Teams count must be at least 2 teams."}, { status: 404})
        }

        const newChampionship = await prisma.championship.create({
            data: {name, format, is_active, teams_count, type, logo}
        })
        
        return NextResponse.json(newChampionship, {status: 201})

    } catch (error) {
        console.error("Error creating coach:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
   try {
    const championships = await prisma.championship.findMany()

    if (championships.length === 0) {
        return NextResponse.json({ error: "No championships found" }, { status: 404 });
    }

    return NextResponse.json({ championships }, { status: 200 });
   } catch (error) {
        console.error("Error fetching championships:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
   }

}