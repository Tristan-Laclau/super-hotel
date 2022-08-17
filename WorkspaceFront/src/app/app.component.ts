import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from './admin/services/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cinema-front';
  keyWord : string = '';
  myForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private cinemaService : HotelService,
    private router : Router){
    this.myForm = this.formBuilder.group({
      keyWord :[this.keyWord]
    });
}

ngOnInit(): void{
  this.keyWord = '';
}

  onSearch(myForm : FormGroup){
    if(myForm.valid){
      this.keyWord = myForm.value.keyWord;
      this.router.navigateByUrl('/hotelByCountry/'+this.keyWord);
    }

  }
}
