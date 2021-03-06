import { punkInMemoryClient } from "@/infrastructure/stubs/punkInMemoryClient";
import { describe, expect, it } from "vitest";
import { getBeers } from "../../useCase/getBeers";
import { mockBeer } from "../utils/mockService";

const getPunkClient = () => new punkInMemoryClient();

describe("list beers use case", () => {
  it("should list empty beers", async () => {
    const useCase = new getBeers(getPunkClient());
    expect(await useCase.execute()).toStrictEqual([]);
  });

  it("should have one beer", async () => {
    const punkClient = getPunkClient();
    punkClient.addBeer(mockBeer);
    const useCase = new getBeers(punkClient);
    expect(await useCase.execute()).toStrictEqual([mockBeer]);
  });
});
