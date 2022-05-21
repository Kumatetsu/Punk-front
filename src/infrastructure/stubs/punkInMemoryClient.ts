import type { Beer } from "@/domain/entities/Beer";
import type { punkClient } from "@/domain/ports/punkClient";
import type { BeerContract, PunkResponse } from "../http/punkTypes";

export class punkInMemoryClient implements punkClient {
    private beers: PunkResponse = [];
    getBeers(): Promise<PunkResponse> {
        return new Promise((resolve, reject) => {
            resolve(this.beers);
        });
    }

    addBeer(beer: BeerContract): void {
        this.beers.push(beer);
    }
}
