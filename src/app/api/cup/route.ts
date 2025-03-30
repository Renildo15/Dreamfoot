import { prisma } from "@/lib/prisma";
import { CreateCup } from "@/types";
import { NextResponse } from "next/server";

// 1 - Mundial
// 2 - Continental
// 3 - Nacional
// 4 - Regional

export async function POST(request: Request) {
    try {
        const body: CreateCup = await request.json()
        if (!body.name) {
            return NextResponse.json({ error : "Name is required"}, { status: 400})
        }

        if (body.teams_count < 2) {
            return NextResponse.json({error: "Teams count must not be leatest the 2."}, {status: 400})
        }

        if (body.is_group_stage) {
            if (body.groups.length === 0) {
                return NextResponse.json({error: "If group stage is true, groups must not be 0"})
            }
            
            if (body.groups_count === 0 || !body.groups_count) {
                return NextResponse.json({error: "Group count is required"})
            }

            if(body.groups_count !== body.groups.length) {
                return NextResponse.json({error: "Group count and Groups length must be equals!"})
            }
        }

        if (!body.reputation) {
            return NextResponse.json({error: "Reputation is required"}, {status: 400})
        }

        if (!body.award) {
            return NextResponse.json({error: "Award is required"}, {status: 400})
        }

        if (!body.country_id) {
            return NextResponse.json({error: "Country id is required"}, {status: 400})
        }
        

        const groupsData = body.is_group_stage
            ? body.groups.map((group) => ({
                name: group.name,
                teams_count: group.teams_count
            }))
            : []

        const newCup = await prisma.cup.create({
            data:{
                name: body.name,
                award: body.award,
                groups_count: body.groups_count,
                is_group_stage: body.is_group_stage,
                reputation: body.reputation,
                teams_count: body.teams_count,
                country_id: body.country_id,
                image_trophy: body.image_trophy,
                logo_cup: body.logo_cup,
                is_active: body.is_active,
                groups: {
                    create: groupsData
                },
            },
            include: {
                groups: true
            }
        })
        
        
        return NextResponse.json(newCup, {status: 201})

    } catch (error) {
        console.error("Error creating coach:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export async function GET(request: Request) {
//    try {
//     const championships = await prisma.championship.findMany({
//         include: {
//             divisions: true
//         }
//     })
//     if (championships.length === 0) {
//         return NextResponse.json({ error: "No championships found" }, { status: 404 });
//     }

//     return NextResponse.json({ championships }, { status: 200 });
//    } catch (error) {
//         console.error("Error fetching championships:", error);
//         return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//    }

// }