import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { Hotel } from 'src/app/model/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent implements OnInit {
  hotel: Hotel = new Hotel(0,'','','','',0,0,'',new City(0,'','',''));
  displayForm: boolean = true;
  

  constructor(
    private hotelService : HotelService,
    private route : ActivatedRoute,
    private router : Router
  ) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.hotelService.getOneHotel(id).subscribe({
      next: (data) => {
        this.hotel=data
      }
    });

    console.log(this.hotel)

  }

  deleteHotel(id: number){
    this.hotelService.deleteHotel(id).subscribe({
      complete: ()=> this.router.navigateByUrl("/adminHotel")
    });
  }

  cancel(){
    this.router.navigateByUrl('/adminHotel');
  }

}