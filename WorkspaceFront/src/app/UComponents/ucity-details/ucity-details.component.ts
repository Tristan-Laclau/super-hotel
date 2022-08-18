import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/admin/services/hotel.service';
import { Hotel } from 'src/app/model/hotel.model';

@Component({
  selector: 'app-ucity-details',
  templateUrl: './ucity-details.component.html',
  styleUrls: ['./ucity-details.component.css']
})
export class UcityDetailsComponent implements OnInit {
  listHotel : Hotel[] | undefined;
  error = null;
  cityId = 1;

  constructor(private hotelService : HotelService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
  this.cityId = this.route.snapshot.params['cityId'];
  this.getHotelByCityId(this.cityId);
  }

  getHotelByCityId(id : number){

    if(id){
    this.hotelService.getHotelByCityId(id).subscribe({
      next:(data)=>(this.listHotel=data),
  
      error:(err)=>this.error=err.message,
  
      complete:()=>this.error=null,
      });
      }
    }
      onSelect(id : number){
        this.router.navigateByUrl("/hotelDetails/"+ id);
      }
    }
