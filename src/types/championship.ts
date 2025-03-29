export enum ChampionshipFormat {
    LEAGUE = "LEAGUE",
    KNOCKOUT = "KNOCKOUT",
    GROUP_STAGE = "GROUP_STAGE",
    MIXED = "MIXED",
    ROUND_ROBIN = "ROUND_ROBIN"
}

export enum ChampionshipType {
    NATIONAL = "NATIONAL",
    INTERNATIONAL = "INTERNATIONAL"
  }
  

export type Championship = {
    id: string;
    name:  string;
    format: ChampionshipFormat;
    type: ChampionshipType;
    teams_count: number;
    logo?: string;
    is_active: boolean;

    // season_id?: number;  
    // season?: Season;  

    // ChampionshipTeam: ChampionshipTeam[];  
}
// Usar o Pick<T, K>
export type CreateChampionship = Omit<Championship, "id">