import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/model/hotel.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

  public getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(environment.host+ '/hotel/all');
  }

  public getOneHotel(id: number){
    return this.http.get<Hotel>(environment.host+ "/hotel/get/"+ id);
  }

  public addHotel(hotel:Hotel){
    return this.http.post<Hotel>(
      environment.host+ '/hotel/save',
      hotel
    )
  }

  public deleteHotel(id: number){
    return this.http.delete<Hotel>(environment.host+ '/hotel/delete/' + id);
  }

  public updateHotel(id: number, hotel : Hotel){
    return this.http.put<Hotel>(environment.host+'/hotel/update/'+id, hotel);
  }

  public getHotelByKeyWord(keyWord : string){
    return this.http.get<Hotel[]>(environment.host+'/hotel/getByKeyWord/'+keyWord);
  }

  public getHotelByCityId(cityId : number){
    return this.http.get<Hotel[]>(environment.host+"/hotel/getByCityId/"+ cityId);
  }

  public getHotelByCountry(country : string){
    return this.http.get<Hotel[]>(environment.host+"/hotel/getByCountry/"+ country);
  }
  
}
