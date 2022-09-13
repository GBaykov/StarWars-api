
import SwapiService from "./services/swapi-service";
export interface IAppState{
  showRandomPlanet: boolean,
  hasError: boolean,
  swapiService:SwapiService
 }
export type IrandomPlanet ={
  itemId: string |  null;
  name: string | null;
  population: string | null;
  rotationPeriod: string | null;
  diameter: string | null;
  loading?:boolean,
  error?:boolean
}

export interface ITransfomedPerson {
  itemId: string | null;
  name: string | null;
  gender: string,
  birthYear: string,
  eyeColor: string
}
export interface ITransfomedStarship {
  itemId: string |  null;
  name: string | null;
  model: string,
  manufacturer: string,
  costInCredits: string,
  length: string,
  crew: string,
  passengers: string,
  cargoCapacity: string
}
export interface IUniversalTransomed{
  itemId?: string |  null;
  name?: string | null;
  population?: string | null;
  rotationPeriod?: string | null;
  diameter?: string | null;
  loading?:boolean,
  error?:boolean,
  model?: string,
  manufacturer?: string,
  costInCredits?: string,
  length?: string,
  crew?: string,
  passengers?: string,
  cargoCapacity?: string,
  gender?: string,
  birthYear?: string,
  eyeColor?: string
}

export interface IItemListState{
  itemList:ITransfomedPerson[] |  IrandomPlanet[] | ITransfomedStarship[] | null
}

export interface IItemListProps{
  onItemSelected:(itemId?:string | null )=>void 
  getData:()=>Promise<ITransfomedPerson[] |  IrandomPlanet[] | ITransfomedStarship[]>
  renderItem:(item:any)=>string | undefined
}

export interface IPeoplePageProps{

}
export interface IPeoplePageState{
  selectedPerson?:string | null,
  hasError?:boolean
}

export interface Idetails{
  itemId: string |  null;
  swapiService:SwapiService
}
export interface IItemDetailProp{
  itemId:string | null,
  getData:(itemId:string )=>Promise<any>,
  getImageUrl:(item:ITransfomedPerson | ITransfomedStarship | IrandomPlanet )=>any,
}

export interface IItemDetails{
  itemId: string |  null;
   getData:((itemId: string) => Promise<any>) | undefined,
    getImageUrl:((item: ITransfomedPerson | IrandomPlanet | ITransfomedStarship) => any) | undefined
}

export interface IwithData{
  getData:()=>Promise<ITransfomedPerson[] |  IrandomPlanet[] | ITransfomedStarship[]>
}

export interface IWithSevice {
  itemId: string |  null;
  getData:()=>Promise<ITransfomedPerson[] |  IrandomPlanet[] | ITransfomedStarship[]>
  onItemSelected?:(itemId?:string | null )=>void
}