import { punkInMemoryClient } from "@/infrastructure/stubs/punkInMemoryClient";
import { describe, expect, it } from "vitest";
import { Beer } from "../../entities/Beer";
import type { punkClient } from "../../ports/punkClient";
import { getBeers } from "../../useCase/getBeers";

const getPunkClient = () => new punkInMemoryClient();
const getBeersUseCase = (punkClient: punkClient) => new getBeers(punkClient);


describe('list beers use case', () => {
    it('should list empty beers', async () => {
        const useCase = new getBeers(getPunkClient());
        expect(await useCase.execute()).toStrictEqual([]);
    });

    it('should have one beer', async () => {
        const punkClient = new punkInMemoryClient();
        const beer = new Beer('d6336d57-fd74-434e-a5d5-606eafbbadc1', 'beer', 'image', 'description');
        punkClient.addBeer(beer);
        const useCase = new getBeers(punkClient);
        expect(await useCase.execute()).toStrictEqual([beer]);
    });
})
