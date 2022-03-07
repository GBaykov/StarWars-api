import { IPeople, IPlanet, IStarship } from "swapi-ts";

// https://swapi.dev/api/
export default class SwapiService {
  readonly apiBase = `https://swapi.dev/api`;

  async getResource(url = ""): Promise<any> {
    const res = await fetch(`${this.apiBase}${url}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this.apiBase}${url}, receivd ${res.status}`
      );
    }
    return res.json();
  }

  async getAllPeople(): Promise<IPeople[]> {
    const res = await this.getResource(`/people/`);
    const people: IPeople[] = res.results;
    return people;
  }

  async getPersone(id: string): Promise<IPeople> {
    const persone: IPeople = await this.getResource(`/people/${id}/`);
    return persone;
  }

  async getAllPlanets(): Promise<IPlanet[]> {
    const res = await this.getResource(`/planets/`);
    const panets: IPlanet[] = res.results;
    return panets;
  }

  async getPlanet(id: string | number): Promise<IPlanet> {
    const panet: IPlanet = await this.getResource(`/planets/${id}/`);
    return panet;
  }

  async getAllStarships(): Promise<IStarship[]> {
    const res = await this.getResource(`/starships/`);
    const starships: IStarship[] = res.results;
    return starships;
  }

  async getStarship(id: string): Promise<IStarship> {
    const starship: IStarship = await this.getResource(`/starships/${id}/`);
    return starship;
  }
}
