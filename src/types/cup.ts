import { Season } from "./season";

export enum Reputation {
    AMATEUR = "AMATEUR",
    REGIONAL = "REGIONAL",
    NATIONAL = "NATIONAL",
    CONTINENTAL = "CONTINENTAL",
    WORLDWIDE = "WORLDWIDE"
}

export type Group = {
    id: string;
    name: string;
    teams_count: number;
    cup_id: number;
}

export type Cup = {
    id: string;
    name: string;
    teams_count: number;
    reputation: Reputation;
    is_active: boolean;
    is_group_stage: boolean;
    logo_cup?:string;
    groups_count: number;
    image_trophy?: string;
    award: number;
    country_id: number;
    groups: Group[];
    seasons: Season[];
}

export type CreateCup = Omit<Cup, "id" | "seasons">