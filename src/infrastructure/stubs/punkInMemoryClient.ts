import type { Beer } from "@/domain/entities/Beer";
import type { punkClient } from "@/domain/ports/punkClient";

export class punkInMemoryClient implements punkClient {
    private beers: Beer[] = [];
    getBeers(): Promise<Beer[]> {
        return new Promise((resolve, reject) => {
            resolve(this.beers);
        });
    }

    addBeer(beer: Beer): void {
        this.beers.push(beer);
    }
}
