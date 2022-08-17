import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/admin/services/hotel.service';
import { City } from 'src/app/model/city.model';
import { Hotel } from 'src/app/model/hotel.model';

@Component({
  selector: 'app-uhotel-details',
  templateUrl: './uhotel-details.component.html',
  styleUrls: ['./uhotel-details.component.css']
})
export class UhotelDetailsComponent implements OnInit {
city : City = {id: 0,name: '',country:''};
hotel : Hotel = {id:0,name:'',phone:'',address:'',rating:'',availableRooms:0,price:0,city: this.city};
error = null;

  constructor(private hotelService : HotelService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.hotelService.getOneHotel(this.route.snapshot.params['hotelId']).subscribe({
      next:(data)=>(this.hotel=data),
  
      error:(err)=>this.error=err.message,
  
      complete:()=>this.error=null,
      });

    }

}
