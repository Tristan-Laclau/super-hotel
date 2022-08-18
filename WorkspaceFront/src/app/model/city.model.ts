import { Hotel } from "./hotel.model";

export class City {
    id : number;

    name : string;

    country : string;

    picture : string;

    constructor(id:number,name:string,country : string,picture : string){
        this.id=id;
        this.name=name;
        this.country=country;
        this.picture = picture;
    }
    
}