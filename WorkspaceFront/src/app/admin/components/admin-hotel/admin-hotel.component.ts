import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { Hotel } from 'src/app/model/hotel.model';
import { CityService } from '../../services/city.service';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.css']
})
export class AdminHotelComponent implements OnInit {

  listHotel : Hotel[] | undefined;
  error = null;
  
    constructor(private hotelService : HotelService,
      private router : Router) {}
  
    ngOnInit(): void {
      this.getAllHotel();
    }
  getAllHotel(){
    this.hotelService.getHotels().subscribe({
      next : (data) => (this.listHotel = data) ,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
      
    })
  }

  onUpdateHotel(id : number){
    this.router.navigateByUrl('/updateHotel/'+id);
  }

  onDeleteHotel(id : number){
    this.router.navigateByUrl('/deleteHotel/'+ id);
  }

  }
