import { Tactic, TacticsType } from "@/types/coach";

export const tactics: Tactic [] = [
    {
        name: "Equilibrado",
        slug: TacticsType.BALANCED
    },
    {
        name: "Contra-ataque",
        slug: TacticsType.COUNTER_ATTACK
    },
    {
        name: "Defensivo",
        slug: TacticsType.DEFENSIVE
    }, 
    {
        name: "Pressão alta",
        slug: TacticsType.HIGH_PRESSURE
    },
    {
        name: "Jogo direto",
        slug: TacticsType.LONG_BALL
    },
    {
        name: "Posse de bola",
        slug: TacticsType.POSSESSION
    },
] 