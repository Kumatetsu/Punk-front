import type { PunkResponse } from "@/infrastructure/http/punkTypes";
import type { punkClient } from "../ports/punkClient";

export class getBeers {
  constructor(private readonly punkClient: punkClient) {}

  public async execute(page = "1"): Promise<PunkResponse> {
    return await this.punkClient.getBeers(page);
  }
}
