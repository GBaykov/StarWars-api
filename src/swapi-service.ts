
//https://swapi.dev/api/


// export class SwapiService {
//     _apiBase = `https://swapi.dev/api`

//     async getResource(url:string=''){
//         const res = await fetch(`${this._apiBase}${url}`);
//         if(!res.ok) {
//             throw new Error (`Could not fetch ${this._apiBase}${url}` +
//             `, receivd ${res.status}`)
//         }
//         return await res.json()
//     }

//     async geAllPeople(){
//         this.getResource(`/people/`)
//     }
//     async gePersone(id:string){
//         this.getResource(`/people/${id}/`)
//     }
// }
