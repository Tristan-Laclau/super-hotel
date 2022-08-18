import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-delete-city',
  templateUrl: './delete-city.component.html',
  styleUrls: ['./delete-city.component.css']
})
export class DeleteCityComponent implements OnInit {
  city : City = new City(0,'','','');
  displayForm: boolean = true;
  

  constructor(
    private cityService : CityService,
    private route : ActivatedRoute,
    private router : Router
  ) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.cityService.getCityById(id).subscribe({
      next: (data) => {
        this.city=data
      }
    });

  }

  deleteCity(id: number){
    this.cityService.deleteCity(id).subscribe({
      complete: ()=> this.router.navigateByUrl("/adminHome")
    });
  }

  cancel(){
    this.router.navigateByUrl('/adminHome');
  }

}
