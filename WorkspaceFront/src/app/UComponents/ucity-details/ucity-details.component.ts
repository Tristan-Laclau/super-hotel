import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/admin/services/hotel.service';
import { Hotel } from 'src/app/model/hotel.model';

@Component({
  selector: 'app-ucity-details',
  templateUrl: './ucity-details.component.html',
  styleUrls: ['./ucity-details.component.css']
})
export class UcityDetailsComponent implements OnInit {
  listCinema : Hotel[] | undefined;
  error = null;
  cityId = 1;

  constructor(private cinemaService : HotelService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
  this.cityId = this.route.snapshot.params['cityId'];
  this.getCinemaByCity(this.cityId);
  
  }

  getCinemaByCity(id : number){

    if(id){
    this.cinemaService.getHotelByCityId(id).subscribe({
      next:(data)=>(this.listCinema=data),
  
      error:(err)=>this.error=err.message,
  
      complete:()=>this.error=null,
      });
    }
      }
    }
