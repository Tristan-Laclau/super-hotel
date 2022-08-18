import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { AdminHotelComponent } from './admin/components/admin-hotel/admin-hotel.component';
import { DeleteCityComponent } from './admin/components/delete-city/delete-city.component';
import { DeleteHotelComponent } from './admin/components/delete-hotel/delete-hotel.component';
import { SaveCityComponent } from './admin/components/save-city/save-city.component';
import { SaveHotelComponent } from './admin/components/save-hotel/save-hotel.component';
import { UpdateCityComponent } from './admin/components/update-city/update-city.component';
import { UpdateHotelComponent } from './admin/components/update-hotel/update-hotel.component';
import { HomeComponent } from './UComponents/home/home.component';
import { LoginComponent } from './UComponents/login/login.component';
import { UcityDetailsComponent } from './UComponents/ucity-details/ucity-details.component';
import { UcityComponent } from './UComponents/ucity/ucity.component';
import { UhotelDetailsComponent } from './UComponents/uhotel-details/uhotel-details.component';
import { UhotelComponent } from './UComponents/uhotel/uhotel.component';

const routes: Routes = [
{path : 'home', component : HomeComponent},
{path:'',component:HomeComponent},
{path : 'hotels', component: UhotelComponent},
{path : 'cities', component : UcityComponent},
{path : 'login',component :LoginComponent},
{path : 'adminHotel',component:AdminHotelComponent},
{path : 'adminCities',component:AdminHomeComponent},
{path : 'adminHome',component:AdminHomeComponent},
{path : 'saveCity',component:SaveCityComponent},
{path : 'updateCity/:id',component:UpdateCityComponent},
{path : 'deleteCity/:id',component:DeleteCityComponent},
{path : 'cityDetails/:cityId',component:UcityDetailsComponent},
{path : 'hotelDetails/:hotelId',component:UhotelDetailsComponent},
{path : 'hotelByCountry/:keyWord',component:UhotelComponent},
{path : 'updateHotel/:id',component: UpdateHotelComponent},
{path : 'deleteHotel/:id', component: DeleteHotelComponent},
{path : 'saveHotel', component : SaveHotelComponent},

    { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
