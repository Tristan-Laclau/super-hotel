
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css'],
})
export class CinemaComponent implements OnInit {
listCinema : Hotel[] | undefined;
error = null;
  constructor(
    private cinemaService : HotelService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getAllCinema();
  }
  getAllCinema() {
    this.cinemaService.getHotels().subscribe({
      next:(data)=>(this.listCinema=data, console.log(data)
      ),
      error:(err)=>this.error=err.message,
      complete:()=>this.error=null
    })
  }

  onUpdateCinema(id : number){
    this.router.navigateByUrl('/updateCinema/'+id);
  }

  onDeleteCinema(id : number){
    this.router.navigateByUrl('/deleteCinema/'+ id);
  }
}
