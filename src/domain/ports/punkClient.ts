import type { PunkResponse } from "@/infrastructure/http/punkTypes";

export interface punkClient {
  getBeers(page?: string, perPage?: string): Promise<PunkResponse>;
}
