import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Hotel } from 'src/app/model/hotel.model';
import { City } from 'src/app/model/city.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-delete-cinema',
  templateUrl: './delete-cinema.component.html',
  styleUrls: ['./delete-cinema.component.css']
})
export class DeleteCinemaComponent implements OnInit {
  cinema: Hotel = new Hotel(0,'',new Address('','','','',''),new City(0,'',0),[]);
  displayForm: boolean = true;
  

  constructor(
    private cinemaService : HotelService,
    private route : ActivatedRoute,
    private router : Router
  ) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.cinemaService.getOneHotel(id).subscribe({
      next: (data) => {
        this.cinema=data
      }
    });
  }

  deleteCinema(id: number){
    this.cinemaService.deleteHotel(id).subscribe({
      complete: ()=> this.router.navigateByUrl("/adminCinema")
    });
  }

}
