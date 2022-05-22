import type { PunkResponse } from "@/infrastructure/http/punkTypes";
import type { punkClient } from "../ports/punkClient";

export class getBeer {
  constructor(private readonly punkClient: punkClient) {}

  public async execute(id: number): Promise<PunkResponse> {
    return await this.punkClient.getBeer(id);
  }
}
