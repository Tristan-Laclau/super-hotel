import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/admin/services/hotel.service';
import { Hotel } from 'src/app/model/hotel.model';

@Component({
  selector: 'app-uhotel',
  templateUrl: './uhotel.component.html',
  styleUrls: ['./uhotel.component.css']
})
export class UhotelComponent implements OnInit {
  listHotel: Hotel[] | undefined;
  error = null;

  constructor(
    private hotelService : HotelService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(routeParams => {this.getHotelByKeyWord(routeParams['keyWord'])});
  // }

  // getHotelByKeyWord(keyWord : string) {
  //   this.hotelService.getHotelByKeyWord(keyWord).subscribe({
  //     next:(data)=>(this.listHotel=data),
  //     error:(err)=>this.error=err.message,
  //     complete:()=>this.error=null,
  //   })
  // }

  ngOnInit(): void{
    this.getAllHotels();
  }

  getAllHotels() {
    this.hotelService.getHotels().subscribe({
      next:(data)=>{this.listHotel=data},
      error:(err)=>this.error=err.message,
      complete:()=>this.error=null,

    })
  }

  onSelect(id : number){
    this.router.navigateByUrl("/hotelDetails/"+ id);
  }

}
