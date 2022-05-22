import { getBeers } from "@/domain/useCase/getBeers";
import { punkClient } from "@/infrastructure/http/punkClient";
import { describe, expect, it, vi } from "vitest";
import { mockBeer } from "../utils/mockService";

describe("list beers use case", () => {
  it("should list empty beers", async () => {
    /** TODO: user msw to catch http request */
    const spy = vi
      .spyOn(global, "fetch")
      .mockImplementation(() =>
        Promise.resolve(new Response(JSON.stringify([mockBeer])))
      );
    const useCase = new getBeers(new punkClient());
    expect(await useCase.execute()).toStrictEqual([mockBeer]);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
