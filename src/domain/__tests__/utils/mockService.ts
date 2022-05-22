import { setupServer } from "msw/node";
import { rest } from "msw";
import type {
  BeerContract,
  PunkResponse,
} from "@/infrastructure/http/punkTypes";
import { punkApiUrl } from "@/infrastructure/http/punkClient";

export const mockBeer: BeerContract = {
  id: 1,
  name: "Buzz",
  tagline: "A Real Bitter Experience.",
  first_brewed: "09/2007",
  description:
    "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
  image_url: "https://images.punkapi.com/v2/keg.png",
  abv: 4.5,
  ibu: 60,
  target_fg: 1010,
  target_og: 1044,
  ebc: 20,
  srm: 10,
  ph: 4.4,
  attenuation_level: 75,
  volume: {},
  boil_volume: {},
  method: {},
  ingredients: {},
  food_pairing: [],
  brewers_tips:
    "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
  contributed_by: "Sam Mason <samjbmason>",
};

const posts: PunkResponse = [mockBeer];

export const server = setupServer(
  rest.get(punkApiUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  })
);
