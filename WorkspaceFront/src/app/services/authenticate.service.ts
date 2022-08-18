import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private users = [
    {username:'user', password:'user', roles:['USER']},
    {username:'admin', password:'admin', roles:['ADMIN']}
  ];

  userConnected : User = new User("","",[]);

  constructor() { }

  getUser(){
    let user = localStorage.getItem('user');
    if(user){
      this.userConnected = JSON.parse(atob(user));
    }
    return this.userConnected;
  }

  login(username : string, password: string){
    let connected : boolean = false;
    this.users.forEach( (user) => {
        if((user.username == username) && (user.password == password)){
          connected = true;
          this.userConnected = user;
          localStorage.setItem('user',btoa(JSON.stringify(user)));
        }
    });
    return connected;
  }

  isConnected() {
    return localStorage.getItem('user') != null; 
  }

  deconnected() {
    localStorage.removeItem('user');
    this.userConnected = new User("","",[]);
  }

  isAdmin() {
    let user = this.getUser();
    if(user.roles.length > 0){
      if(user.roles.indexOf('ADMIN') > -1)  return true;
    }
    return false;
  }
}
