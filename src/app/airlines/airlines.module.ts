import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirlinesRoutingModule } from './airlines-routing.module';
import { AirlineshomeComponent } from './airlineshome/airlineshome.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { AvailablflightsComponent } from './availablflights/availablflights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverdirDirective } from './aircustomdir/hoverdir.directive';


@NgModule({
  declarations: [
    AirlineshomeComponent,
    FlightsearchComponent,
    AvailablflightsComponent,
    HoverdirDirective
    ],
  imports: [
    CommonModule,
    AirlinesRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AirlinesModule { }
