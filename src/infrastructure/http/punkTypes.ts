export class BeerContract {
  constructor(
    public id: number,
    public name: string,
    public tagline: string,
    public first_brewed: string,
    public description: string,
    public image_url: string,
    public abv: number,
    public ibu: number,
    public target_fg: number,
    public target_og: number,
    public ebc: number,
    public srm: number,
    public ph: number,
    public attenuation_level: number,
    public volume: Object,
    public boil_volume: Object,
    public method: Object,
    public ingredients: Object,
    public food_pairing: Object,
    public brewers_tips: string,
    public contributed_by: string
  ) {}
}

export type PunkResponse = BeerContract[];
