import { IPeople, IPlanet, IStarship } from "swapi-ts";
import { IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from "../types";

// https://swapi.dev/api/
export default class SwapiService {
  readonly apiBase = `https://swapi.dev/api`;
  extractId(item:IPlanet | IPeople | IStarship){
    const idRegExp = /\/([0-9]*)\/$/;
    const idMatch = item.url.match(idRegExp);
      let id;
    if(idMatch != null){
     id =  idMatch[1]
    }
    return id
  }

  async getResource(url = ""): Promise<any> {
    const res = await fetch(`${this.apiBase}${url}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this.apiBase}${url}, receivd ${res.status}`
      );
    }
    return res.json();
  }

  //------------PEOPLE------------
  async getAllPeople(): Promise<ITransfomedPerson[]> {
    const res = await this.getResource(`/people/`);
    const people: IPeople[] = res.results;
    return people.map(this.transformPerson);
  }

  async getPersone(id: string): Promise<ITransfomedPerson> {
    const persone: IPeople = await this.getResource(`/people/${id}/`);
    return this.transformPerson(persone);
  }

  transformPerson(person:IPeople):ITransfomedPerson {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

//------------PLANET-------------
  async getAllPlanets():Promise<IrandomPlanet[]> {
    const res = await this.getResource(`/planets/`);
    const planets: IPlanet[] = res.results;
    return planets.map(this.transformPlanet);
  }

  async getPlanet(id: string | number):Promise<IrandomPlanet> {
    const planet: IPlanet = await this.getResource(`/planets/${id}/`);
    return this.transformPlanet(planet);

  }

  transformPlanet(planet:IPlanet):IrandomPlanet{
    const id = this.extractId(planet)
        return {
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        }
    }

//------------STARSHIP-------------
  async getAllStarships(): Promise<ITransfomedStarship[]> {
    const res = await this.getResource(`/starships/`);
    const starships: IStarship[] = res.results;
    return starships.map(this.transformStarship);
  }

  async getStarship(id: string): Promise<ITransfomedStarship> {
    const starship: IStarship = await this.getResource(`/starships/${id}/`);
    return this.transformStarship(starship);
  }

  transformStarship(starship:IStarship):ITransfomedStarship{
        return {
          id:this.extractId(starship),
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.cost_in_credits,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargo_capacity
        }
    }
}
