import { Beer } from "@/domain/entities/Beer";
import type { PunkResponse } from "./punkTypes";

export const punkApiUrl = "https://api.punkapi.com/v2/beers";

export class punkClient implements punkClient {
  public async getBeers(page = "1", perPage = "20"): Promise<PunkResponse> {
    const url =
      punkApiUrl + "?" + new URLSearchParams({ page: page, per_page: perPage });
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  }
}
