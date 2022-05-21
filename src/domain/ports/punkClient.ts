import type { Beer } from "../entities/Beer";

export interface punkClient {
    getBeers(): Promise<Beer[]>;
}
