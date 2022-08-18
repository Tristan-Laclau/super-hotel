import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  listCities : City[] | undefined;
  error = null;
  
    constructor(private cityService : CityService, private router : Router) {}
  
    ngOnInit(): void {
      this.getAllCity();
    }
  getAllCity(){
    this.cityService.getCity().subscribe({
      next : (data) => (this.listCities = data) ,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
      
    })
  }

  onUpdateCity(id : number){
    this.router.navigateByUrl('/updateCity/'+id);
  }

  onDeleteCity(id : number){
    this.router.navigateByUrl('/deleteCity/'+ id);
  }

  }
