import type { PunkResponse } from "@/infrastructure/http/punkTypes";

export interface punkClient {
  getBeers(page?: number, perPage?: number): Promise<PunkResponse>;
  getBeer(id: number): Promise<PunkResponse>;
}
