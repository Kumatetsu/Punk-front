import { Beer } from "@/domain/entities/Beer";
import type { PunkResponse } from "./punkTypes";

export const punkApiUrl = 'https://api.punkapi.com/v2/beers';

export class punkClient implements punkClient {
    public async getBeers(): Promise<PunkResponse> {
        const response = await fetch(punkApiUrl, {method: 'GET'});
        return await response.json();
    }
}
