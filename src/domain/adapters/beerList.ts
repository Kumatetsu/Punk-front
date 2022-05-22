import type { getBeers } from "@/domain/useCase/getBeers";
import type { PunkResponse } from "@/infrastructure/http/punkTypes";
import { adapterListener } from "./adapterListener";

type listState  ={
    beers: PunkResponse
}

const initialState = {
    beers: []
}

export class beerList extends adapterListener<listState>{
  constructor(private getBeersUseCase: getBeers) {
    super(initialState);
    this.loadBeers();
  }

  private async loadBeers(page = "1") {
    const beers = await this.getBeersUseCase.execute(page);
    console.log(beers);
    this.changeState({
        beers
    });

  }

  public nextPage(currentPage: number): void {
    this.loadBeers("" + currentPage + 1);
  }
}
