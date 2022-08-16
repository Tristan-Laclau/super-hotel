import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/admin/services/hotel.service';
import { Hotel } from 'src/app/model/hotel.model';

@Component({
  selector: 'app-ucinema',
  templateUrl: './ucinema.component.html',
  styleUrls: ['./ucinema.component.css']
})
export class UCinemaComponent implements OnInit {
  listCinema: Hotel[] | undefined;
  keyWord : string = '';
  error = null;

  constructor(
    private cinemaService : HotelService,
    private route : ActivatedRoute
  ) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(routeParams => {this.getCinemaByKeyWord(routeParams['keyWord'])});
  // }
  // getCinemaByKeyWord(keyWord : string) {
  //   this.cinemaService.getCinemasByKeyWord(keyWord).subscribe({
  //     next:(data)=>(this.listCinema=data),
  //     error:(err)=>this.error=err.message,
  //     complete:()=>this.error=null, 
  //   })
  // }

  ngOnInit(): void {

    this.keyWord = this.route.snapshot.params['keyWord'];

    this.getAllCinema();

  }

 



  getAllCinema() {
    if(this.keyWord){

    this.cinemaService.getHotelByKeyWord(this.keyWord).subscribe({
      next:(data)=>{this.ngOnInit();
        this.listCinema=data},
      error:(err)=>this.error=err.message,
      complete:()=>this.error=null,

    })}

    else{
      this.cinemaService.getHotels().subscribe({
        next:(data)=>{this.ngOnInit();

          this.listCinema=data},
  
        error:(err)=>this.error=err.message,
  
        complete:()=>this.error=null,

      })
    }

  }

}
