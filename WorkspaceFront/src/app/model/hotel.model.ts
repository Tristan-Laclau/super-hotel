import { City } from './city.model';


export class Hotel {
  id: number;
  name: string;
  phone : string;
  address : string;
  rating : string;
  availableRooms : number;
  price : number;
  city: City;

  constructor(
    id: number,
    name: string,
    phone: string,
    address : string,
    rating : string,
    availableRooms: number,
    price: number,
    city: City
  ) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.phone=phone;
    this.address=address;
    this.rating=rating;
    this.availableRooms=availableRooms;
    this.price=price;
  }
}
