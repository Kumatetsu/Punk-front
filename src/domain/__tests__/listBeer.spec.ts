import { punkInMemoryClient } from "@/infrastructure/stubs/punkInMemoryClient";
import { describe, expect, it } from "vitest";
import { getBeers } from "../useCase/getBeers";

describe('list beers use case', () => {
    it('should list empty beers', async () => {
        const punkClient = new punkInMemoryClient();
        const useCase = new getBeers(punkClient);
        expect(await useCase.execute()).toStrictEqual([]);
    });
})
