export type Division = {
    id: string;
    name: string;
    level: number;
}

export type CreateDivision = Omit<Division, "id">