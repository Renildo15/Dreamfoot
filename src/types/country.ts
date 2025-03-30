import { Cup } from "./cup";
import { League } from "./league";

export type Country = {
    id: number;
    name: string;
    continent: string;
    cups: Cup[];
    leagues: League;
}