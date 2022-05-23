import { adapterListener } from "@/domain/adapters/adapterListener";
import type { getBeer } from "@/domain/useCase/getBeer";
import type { BeerContract } from "@/infrastructure/http/punkTypes";

type beerState = {
    beer?: BeerContract,
}

const initialState = {
    beer: undefined,
}

export class beerAdapter extends adapterListener<beerState>{
    constructor(private getBeerUseCase: getBeer) {
        super(initialState);
    }

    public loadBeer = async (id: number) => {
        const beer = await this.getBeerUseCase.execute(id);
        this.changeState({...this.state, beer: beer[0]});
    }

    public clearBeer = () => {
        this.changeState({...this.state, beer: undefined});
    }
}
