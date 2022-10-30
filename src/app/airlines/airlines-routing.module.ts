import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirguardGuard } from '../myguards/airguard.guard';
import { AirlineshomeComponent } from './airlineshome/airlineshome.component';
import { AvailablflightsComponent } from './availablflights/availablflights.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';

const routes: Routes = [
  {path:'airlines', component:AirlineshomeComponent ,canActivate:[AirguardGuard] , 
  children:[ {path:'flightsearch', component:FlightsearchComponent},
           {path:'availableflights', component:AvailablflightsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirlinesRoutingModule { }
