import { Hotel } from "./hotel.model";

export class City {
    id : number;

    name : string;

    country : string;

    constructor(id:number,name:string,country : string){
        this.id=id;
        this.name=name;
        this.country=country;
    }
    
}