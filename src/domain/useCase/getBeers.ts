import type { Beer } from "../entities/Beer";
import type { punkClient } from "../ports/punkClient";

export class getBeers {
    constructor(private readonly punkClient: punkClient) {}

    public async execute(): Promise<Beer[]> {
        return [];
    }
}
