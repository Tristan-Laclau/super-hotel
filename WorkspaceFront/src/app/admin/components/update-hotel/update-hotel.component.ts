import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { Hotel } from 'src/app/model/hotel.model';
import { CityService } from '../../services/city.service';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {
  myForm : FormGroup;
  hotel : Hotel |undefined;
  listCities : City[] | undefined;

  error : string = "";
  status : boolean = false;

  constructor(private formBuilder: FormBuilder,private hotelService : HotelService, private cityService : CityService, private router : Router, private route : ActivatedRoute) {
  
    
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
    this.getAllCities();
    let id = this.route.snapshot.params['id'];
    this.hotelService.getOneHotel(id).subscribe({
      next:(data)=>{
        this.hotel=data
        this.myForm.setValue({
          id : this.hotel.id,
          name : this.hotel.name,
          phone:this.hotel.phone,
          address: this.hotel.address,
          rating: this.hotel.rating,
          availableRooms: this.hotel.availableRooms,
          price: this.hotel.price,
          city: this.hotel.city
        })
      }
    })
  }

  getAllCities(){
    this.cityService.getCity().subscribe({
      next: (data)=>this.listCities=data
    });
  }

  onSaveHotel(form : FormGroup){
    if(form.valid){
    let newHotel : Hotel ;
    newHotel = {id:form.value.id,
      name:form.value.name,
      phone:form.value.phone,
      address:form.value.address,
      rating:form.value.rating,
      availableRooms:form.value.availableRooms,
      price:form.value.price,
      city:new City(form.value.city,'','')
    };
     this.hotelService.updateHotel(form.value.id, newHotel).subscribe({
      next : (data) => console.log(data),  
      error : (err) => this.error = err.message,
      complete : () => this.router.navigateByUrl('adminHotel')
    });
    }
  }
}
