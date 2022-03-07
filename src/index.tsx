import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./bootstrap.min.css";
import { IPeople, IPlanet, IStarship } from "swapi-ts";
//import { PersoneType } from "./types";
//import { SwapiService } from "./swapi-service";
//https://swapi.dev/api/

console.log('Hello worls')

 class SwapiService {
    _apiBase = `https://swapi.dev/api`

    async getResource(url:string=''){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error (`Could not fetch ${this._apiBase}${url}` +
            `, receivd ${res.status}`)
        }
        return await res.json()
    }

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        const people:IPeople[] = res.results;
        return people;
    }

    async getPersone(id:string){
        const persone:IPeople = await this.getResource(`/people/${id}/`)
        return persone;
    }

    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        const panets:IPlanet[] = res.results;
        return panets;
    }

    async getPlanet(id:string){
        const panet:IPlanet = await this.getResource(`/planets/${id}/`)
        return panet;
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        const starships:IStarship[] = res.results;
        return starships;
    }

    async getStarship(id:string){
        const starship:IStarship = await this.getResource(`/starships/${id}/`);
        return starship;
    }
}

const api = new SwapiService()
api.getStarship('3').then((people)=>{
console.log(people.name)
})