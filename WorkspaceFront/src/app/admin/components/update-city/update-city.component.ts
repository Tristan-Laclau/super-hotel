import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { City } from 'src/app/model/city.model';
import { CityService } from '../../services/city.service';



@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {
  myForm : FormGroup;
  city : City |undefined;

  error : string = "";
  status : boolean = false;

  constructor(private formBuilder: FormBuilder,private cityService : CityService, private router : Router, private route : ActivatedRoute) {
  
    
    this.myForm = this.formBuilder.group({
   id : [0],
   name : ['',Validators.required],
   country : ['',Validators.required],
    
    });
    }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.cityService.getCityById(id).subscribe({
      next:(data)=>{
        this.city=data
        this.myForm.setValue({
          id : this.city.id,
          name : this.city.name,
          country:this.city.country
        })
      }
    })
  }

  onSaveCity(form : FormGroup){
    if(form.valid){
     this.cityService.postCity({id:form.value.id,name:form.value.name,country:form.value.country}).subscribe({
      next : (data) => console.log(data),  
      error : (err) => this.error = err.message,
      complete : () => this.router.navigateByUrl('adminHome')
    });
    }
  }
}
