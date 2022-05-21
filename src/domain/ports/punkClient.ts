import type { PunkResponse } from "@/infrastructure/http/punkTypes";
import type { Beer } from "../entities/Beer";

export interface punkClient {
    getBeers(): Promise<PunkResponse>;
}
