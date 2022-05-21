import { punkClient } from "@/infrastructure/http/punkClient";
import { beerList } from "../adapters/beerList";
import { getBeers } from "../useCase/getBeers";

const provideBeerList = () => {
    const getBeersUseCase = new getBeers(new punkClient());

    return new beerList(getBeersUseCase);
}

export const dependenciesLocator = {
    provideBeerList,
};
