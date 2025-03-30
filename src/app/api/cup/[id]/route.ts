import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;

        if (!id || isNaN(Number(id))) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }

        const cup = await prisma.cup.findUnique({
            where: {id: parseInt(id)},
            include: {groups: true}
        })

        if (!cup) {
            return NextResponse.json({error: "Cup not found!"})
        }

        return NextResponse.json(cup, {status: 200})
    } catch (error) {
        console.error("Error fetching cup:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;

        if (!id || isNaN(Number(id))) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }

        await prisma.cup.delete({
            where: {id: parseInt(id)}
        })

        return NextResponse.json(null, {status: 204})
    } catch (error) {
        console.error("Error delete cup:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}