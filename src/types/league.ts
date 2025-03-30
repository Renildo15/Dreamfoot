import { Reputation } from "./cup";
import { Season } from "./season";

export type Division = {
    id: string;
    name: string;
    teams_count: number;
    division_logo?:string;
    is_active: boolean;
    image_trophy?: string;
    division_order: number;
    award: number;
    league_id: number
}

export type League = {
    id: string;
    name: string;
    reputation: Reputation;
    is_active: boolean;
    knockout: boolean;
    division_count: number;
    country_id: number;
    seasons: Season[];
    divisions: Division[]
}


export type CreateDivision = Omit<League, "id">
export type CreateLeague = Omit<League, "id" | "seasons">