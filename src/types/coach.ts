export enum TacticsType {
    POSSESSION = "POSSESSION",
    COUNTER_ATTACK = "COUNTER_ATTACK",
    DEFENSIVE = "DEFENSIVE",
    HIGH_PRESSURE = "HIGH_PRESSURE",
    LONG_BALL = "LONG_BALL",
    BALANCED = "BALANCED"
}

export enum FormationType {
    FOUR_THREE_THREE = "FOUR_THREE_THREE",
    FOUR_TWO_THREE_ONE = "FOUR_TWO_THREE_ONE",
    FOUR_FOUR_TWO = "FOUR_FOUR_TWO",
    THREE_FIVE_TWO = "THREE_FIVE_TWO",
    FIVE_THREE_TWO = "FIVE_THREE_TWO",
    FOUR_ONE_TWO_ONE_TWO = "FOUR_ONE_TWO_ONE_TWO"
}

export type Formation = {
    formation: string;
    name: string;
}

export type Tactic = {
    name: string;
    slug: string
}

export type Coach = {
    id: number;
    name: string;
    titles: number;
    nationality: string;
    tactics: TacticsType;
    preferenceFormation: FormationType;
    experience: number;
    reputation: number;
}

export type CreateCoach = Omit<Coach, "id" | "titles" | "experience" | "reputation">;