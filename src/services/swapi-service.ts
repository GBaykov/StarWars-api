import { IPeople, IPlanet, IStarship } from "swapi-ts";
import { IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from "../types";

// https://swapi.dev/api/
export default class SwapiService {

  readonly apiBase = `https://swapi.dev/api`;
  imageBase = 'https://starwars-visualguide.com/assets/img'

  extractId = (item:IPlanet | IPeople | IStarship)=>{
    const idRegExp = /\/([0-9]*)\/$/;
    const idMatch = item.url.match(idRegExp);
      let itemId:string = "";
    if(idMatch != null){
      itemId +=idMatch[1]
    }
    return itemId
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

  getPersonImage = ({itemId}:ITransfomedPerson | ITransfomedStarship | IrandomPlanet ) => {
    return `${this.imageBase}/characters/${itemId}.jpg`
  };

  getStarshipImage = ({itemId}:ITransfomedPerson | ITransfomedStarship | IrandomPlanet ) => {
    return `${this.imageBase}/starships/${itemId}.jpg`
  };

  getPlanetImage = ({itemId}:ITransfomedPerson | ITransfomedStarship | IrandomPlanet ) => {
    return `${this.imageBase}/planets/${itemId}.jpg`
  };

  //------------PEOPLE------------
   getAllPeople = async(): Promise<ITransfomedPerson[]> =>{
    const res = await this.getResource(`/people/`);
    const people: IPeople[] = res.results;
    return people.map(this.transformPerson);
  }

   getPerson = async(itemId: string | null): Promise<ITransfomedPerson>=> {
    const persone: IPeople = await this.getResource(`/people/${itemId}/`);
    return this.transformPerson(persone);
  }

  transformPerson=(person:IPeople):ITransfomedPerson =>{
    return {
      itemId: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

//------------PLANET-------------
   getAllPlanets = async():Promise<IrandomPlanet[]> =>{
    const res = await this.getResource(`/planets/`);
    const planets: IPlanet[] = res.results;
    return planets.map(this.transformPlanet);
  }

   getPlanet = async(itemId: string | number):Promise<IrandomPlanet>=> {
    const planet: IPlanet = await this.getResource(`/planets/${itemId}/`);
    return this.transformPlanet(planet);

  }

  transformPlanet=(planet:IPlanet):IrandomPlanet=>{
    const itemId = this.extractId(planet)
        return {
          itemId,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        }
    }

//------------STARSHIP-------------
   getAllStarships = async(): Promise<ITransfomedStarship[]> =>{
    const res = await this.getResource(`/starships/`);
    const starships: IStarship[] = res.results;
    return starships.map(this.transformStarship);
  }

   getStarship = async (itemId: string): Promise<ITransfomedStarship> =>{
    const starship: IStarship = await this.getResource(`/starships/${itemId}/`);
    return this.transformStarship(starship);
  }

  transformStarship=(starship:IStarship):ITransfomedStarship=>{
        return {
          itemId:this.extractId(starship),
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
