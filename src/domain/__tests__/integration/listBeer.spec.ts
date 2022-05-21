import { getBeers } from "@/domain/useCase/getBeers";
import { describe, it } from "vitest";

describe('list beers use case', () => {
    it('should list empty beers', async () => {
        const useCase = new getBeers(new PunkClient());
        expect(await useCase.execute()).toStrictEqual([]);
    });
})
