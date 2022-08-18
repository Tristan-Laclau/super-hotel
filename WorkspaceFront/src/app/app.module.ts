import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UCinemaComponent } from './UComponents/ucinema/ucinema.component';
import { UcityComponent } from './UComponents/ucity/ucity.component';
import { UmoviesComponent } from './UComponents/umovies/umovies.component';
import { HomeComponent } from './UComponents/home/home.component';

import { FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './UComponents/login/login.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { CityComponent } from './admin/components/city/city.component';
import { CinemaComponent } from './admin/components/cinema/cinema.component';
import { SaveCityComponent } from './admin/components/save-city/save-city.component';
import { SaveCinemaComponent } from './admin/components/save-cinema/save-cinema.component';
import { UpdateCinemaComponent } from './admin/components/update-cinema/update-cinema.component';
import { DeleteCinemaComponent } from './admin/components/delete-cinema/delete-cinema.component';
import { UpdateCityComponent } from './admin/components/update-city/update-city.component';
import { UhotelComponent } from './UComponents/uhotel/uhotel.component';
import { UhotelDetailsComponent } from './UComponents/uhotel-details/uhotel-details.component';
import { UcityDetailsComponent } from './UComponents/ucity-details/ucity-details.component';
import { AdminHotelComponent } from './admin/components/admin-hotel/admin-hotel.component';
import { UpdateHotelComponent } from './admin/components/update-hotel/update-hotel.component';
import { SaveHotelComponent } from './admin/components/save-hotel/save-hotel.component';
import { DeleteCityComponent } from './admin/components/delete-city/delete-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    UCinemaComponent,
    UcityComponent,
    UmoviesComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    CityComponent,
    SaveCityComponent,
    SaveCinemaComponent,
    UpdateCinemaComponent,
    DeleteCinemaComponent,
    UhotelComponent,
    UpdateCityComponent,
    UhotelDetailsComponent,
    UcityDetailsComponent,
    AdminHotelComponent,
    UpdateHotelComponent,
    SaveHotelComponent,
    DeleteCityComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
