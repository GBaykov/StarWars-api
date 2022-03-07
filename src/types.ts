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
  id: string | null;
  name: string | null;
  population: string | null;
  rotationPeriod: string | null;
  diameter: string | null;
}
