import type { PunkResponse } from "@/infrastructure/http/punkTypes";
import type { Beer } from "../entities/Beer";
import type { punkClient } from "../ports/punkClient";

export class getBeers {
    constructor(private readonly punkClient: punkClient) {}

    public async execute(): Promise<PunkResponse> {
        return await this.punkClient.getBeers();
    }
}
