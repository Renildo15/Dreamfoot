export type Season = {
    id: number;
    year: number;
    is_active: boolean;
    winner?: string;
    cup_id?: number;
    league_id?: number;
}