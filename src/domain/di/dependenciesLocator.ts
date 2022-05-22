import { beerAdapter } from "@/application/adapters/beer";
import { punkClient } from "@/infrastructure/http/punkClient";
import { beerListAdapter } from "../../application/adapters/beerList";
import { getBeer } from "../useCase/getBeer";
import { getBeers } from "../useCase/getBeers";

const provideBeerList = () => {
  const getBeersUseCase = new getBeers(new punkClient());

  return new beerListAdapter(getBeersUseCase);
};

const provideBeer = () => {
  const getBeerUseCase = new getBeer(new punkClient());

  return new beerAdapter(getBeerUseCase);
}

export const dependenciesLocator = {
  provideBeerList,
  provideBeer
};
