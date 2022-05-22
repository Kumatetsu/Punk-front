import type { PunkResponse } from "./punkTypes";

export const punkApiUrl = "https://api.punkapi.com/v2/beers";

export class punkClient implements punkClient {
  public async getBeers(page = 1, perPage = 20): Promise<PunkResponse> {
    const url =
      punkApiUrl + "?" + new URLSearchParams({ page: page.toString(), per_page: perPage.toString() });
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  }

  public async getBeer(id: number): Promise<PunkResponse> {
    const url = punkApiUrl + "/" + id.toString();
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  }
}
