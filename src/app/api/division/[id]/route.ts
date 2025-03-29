import { prisma } from "@/lib/prisma";
import { CreateDivision } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
   try {
    const { id } = params;
    const body: CreateDivision = await request.json()

    const { name, level} = body;

    if (!id) {
        return NextResponse.json({error: "ID is required"}, {status: 404})
    }

    if (!name) {
        return NextResponse.json({ error : "Name is required"}, { status: 404})
    }

    if (level === 0) {
        return NextResponse.json({ error : "Level must not be equal 0"}, { status: 404})
    }  

    const championship = await prisma.championship.findUnique({
        where: {id: parseInt(id)}
    });

    if (!championship) {
        return NextResponse.json({error: "Championship not found"}, {status: 404})
    }

    const existingDivision = await prisma.division.findUnique({
        where: {level}
    })
    

    if (existingDivision?.name === name.trim()) {
        return NextResponse.json({error: "Name already exists."}, {status: 404})
    }

    if (existingDivision) {
        return NextResponse.json({ error: "A division with this level already exists" }, { status: 409 });
    }

    const newDivision = await prisma.division.create({
        data: {name: name.trim(), level}
    })

    await prisma.championship.update({
        where: { id: parseInt(id)},
        data: {
            divisions: {
                connect: { id: newDivision.id}
            }
        }
    })

    return NextResponse.json(newDivision, {status: 201})

   } catch (error) {
        console.error("Error creating division:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
   }
}