import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { Hotel } from 'src/app/model/hotel.model';
import { CityService } from '../../services/city.service';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-save-hotel',
  templateUrl: './save-hotel.component.html',
  styleUrls: ['./save-hotel.component.css']
})
export class SaveHotelComponent implements OnInit {
  myForm: FormGroup;
  hotel: Hotel | undefined;
  displayForm: boolean = true;
  listCities: City[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private cityService: CityService,
    private router: Router
  ) {
    this.myForm = this.formBuilder.group({
      id : [0],
      name : [''],
      phone : [''],
      address : [''],
      rating : [''],
      availableRooms : [0],
      price : [0],
      city : [0,'',''],
       
       });
  }

  ngOnInit(): void {
    this.cityService.getCity().subscribe({
      next: (data) => (this.listCities = data),
    });
  }

  onSaveHotel(form: FormGroup) {
    if (form.valid) {
      const hotelData = new FormData();
      this.hotel = new Hotel(
          0,
          form.value.name,
          form.value.phone,
          form.value.address,
          form.value.rating,
          form.value.availableRooms,
          form.value.price,
          '',
          new City(form.value.city,'','','')
      );
      this.hotelService.addHotel(this.hotel).subscribe({
        next: (data) => console.log('ok'),
        error: (err) => console.log(err),
        complete: () => this.router.navigateByUrl('adminHotel'),
      });
    }
   }
}