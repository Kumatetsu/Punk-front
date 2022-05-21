import type { getBeers } from "@/domain/useCase/getBeers";
import type { PunkResponse } from "@/infrastructure/http/punkTypes";

export class beerList {
    private beers: PunkResponse = [];

    constructor(
        private getBeersUseCase: getBeers
    ) {
        this.loadBeers();
    }

    private async loadBeers() {
        this.beers = await this.getBeersUseCase.execute();
    }

    public getBeers(): PunkResponse {
        return this.beers;
    }
}
