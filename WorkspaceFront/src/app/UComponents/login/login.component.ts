import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;
  user : User | undefined;
  error : string | undefined;
  connected : boolean = false;
  
  constructor(private formBuilder : FormBuilder, public authenticateService : AuthenticateService, 
    private router : Router) { 
    this.user = authenticateService.getUser(); 
    this.connected = authenticateService.isConnected();
    this.myForm = this.formBuilder.group({
      username : [this.user.username],
      password : [this.user.password]
    })
  }

  ngOnInit(): void {
  }

  onLogin(form : FormGroup){
    if(form.valid){
      if(this.authenticateService.login(form.value.username,form.value.password)){
          this.router.navigateByUrl('hotels');
      }
      this.error = 'Wrong login';
    }
  }


  deconnexion(){
    this.authenticateService.deconnected();
    this.connected = false;
    this.router.navigateByUrl('hotels');
  }
}