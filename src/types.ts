// export type PersoneType =  {
//     name: string,
//     height: string,
//     mass: string,
//     hair_color: string,
//     skin_color: string,
//     eye_color: string,
//     birth_year: string,
//     gender: string,
//     homeworld: string,
//     films: PersonsArrType[],
//     species: [],
//     vehicles: PersonsArrType[],
//     starships: PersonsArrType[],
//     created:string,
//     edited: string,
//     url: string,

// }
// export type PersonsArrType = {
//     prop:string
// }

export interface IrandomPlanet {
  id?: string | number| null;
  name: string | null;
  population: string | null;
  rotationPeriod: string | null;
  diameter: string | null;
  loading?:boolean,
  error?:boolean
}

export interface ITransfomedPerson {
  id: string | null;
  name: string | null;
  gender: string,
  birthYear: string,
  eyeColor: string
}
export interface ITransfomedStarship {
  id?: string | number| null;
  name: string | null;
  model: string,
  manufacturer: string,
  costInCredits: string,
  length: string,
  crew: string,
  passengers: string,
  cargoCapacity: string
}

export interface IItemListState{
  peopleList:ITransfomedPerson[] | null
}

export interface IItemListProps{
  onItemSelected:(id?:string | null )=>void //id?:string | null | number | undefined,
}