import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/admin/services/hotel.service';
import { CityService } from 'src/app/admin/services/city.service';

import { Hotel } from 'src/app/model/hotel.model';
import { City } from 'src/app/model/city.model';

@Component({
  selector: 'app-ucity',
  templateUrl: './ucity.component.html',
  styleUrls: ['./ucity.component.css']
})
export class UcityComponent implements OnInit {
listCities : City[] | undefined;
listHotels : Hotel[]|undefined;
error = null;
 
 

  constructor(private cityService : CityService,private hotelService : HotelService, private router : Router) {}

  ngOnInit(): void {
    this.getAllCity();
    this.getAllHotel();

  }
getAllCity(){
  this.cityService.getCity().subscribe({
    next : (data) => {this.listCities = data, console.log(data)} ,
    error : (err) => this.error = err.message,
    complete : () => this.error = null
    
  })
}
getAllHotel(){
  this.hotelService.getHotels().subscribe({
    next :(data) => (this.listHotels = data),
    error : (err) => this.error = err.message,
    complete : () => this.error = null
  })

  }

  onSelect(cityId : number){
    this.router.navigateByUrl("/cityDetails/"+ cityId);
  }
 


  }


