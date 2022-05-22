import type { getBeers } from "@/domain/useCase/getBeers";
import type { PunkResponse } from "@/infrastructure/http/punkTypes";
import { adapterListener } from "../../domain/adapters/adapterListener";

type listState  ={
    beers: PunkResponse,
    stock: PunkResponse,
    page: number,
    perPage: number,
}

const defaultPage = 1;
const defaultPerPage = 20;

const initialState = {
    beers: [],
    stock: [],
    page: defaultPage,
    perPage: defaultPerPage,
}

export class beerListAdapter extends adapterListener<listState>{
  constructor(private getBeersUseCase: getBeers) {
    super(initialState);
    this.initBeers();
  }

  private initBeers = async () => {
    const stock = await this.loadBeers();
    this.changeState({...this.state, beers: stock, stock});
  }

  private loadBeers = async (page = this.state.page) => await this.getBeersUseCase.execute(page);

  public nextPage = async () =>  {
    const page = this.state.page + 1;
    const stock = await this.loadBeers(page);
    this.changeState({...this.state, stock, beers: stock, page: page});
  }

  public resetPage = async () => {
    const stock = await this.loadBeers(defaultPage);
    this.changeState({...this.state, stock, beers: stock, page: defaultPage});
  }

  public filter = (query: string) => {
    const beers = this.state.stock.filter(beer => beer.name.toLowerCase().includes(query.toLowerCase()));
    this.changeState({...this.state, beers});
  }
}
