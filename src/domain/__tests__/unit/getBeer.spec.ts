import { punkInMemoryClient } from "@/infrastructure/stubs/punkInMemoryClient";
import { describe, expect, it } from "vitest";
import { getBeer } from "../../useCase/getBeer";
import { mockBeer } from "../utils/mockService";

const getPunkClient = () => new punkInMemoryClient();

describe("list beers use case", () => {
  it("should have one beer", async () => {
    const punkClient = getPunkClient();
    punkClient.addBeer(mockBeer);
    const useCase = new getBeer(punkClient);
    expect(await useCase.execute(1)).toStrictEqual([mockBeer]);
  });

  it("should have one beer", async () => {
    const punkClient = getPunkClient();
    punkClient.addBeer(mockBeer);
    const useCase = new getBeer(punkClient);
    expect(await useCase.execute(2)).toStrictEqual([]);
  });
});
