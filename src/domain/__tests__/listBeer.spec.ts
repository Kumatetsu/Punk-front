import { describe, expect, it } from "vitest";

describe('list beers use case', () => {
    it('should list empty beers', () => {
        expect(getBeersUseCase.execute()).toBe(true);
    });
})
