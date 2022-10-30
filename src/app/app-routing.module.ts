import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineshomeComponent } from './airlines/airlineshome/airlineshome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MensShoesComponent } from './mens-shoes/mens-shoes.component';
import { MensShortsComponent } from './mens-shorts/mens-shorts.component';
import { MensTshirtComponent } from './mens-tshirt/mens-tshirt.component';
import { MensComponent } from './mens/mens.component';
import { AirguardGuard } from './myguards/airguard.guard';
import { FormChangesGuard } from './myguards/form-changes.guard';
import { PnfComponent } from './pnf/pnf.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

const routes: Routes = [
  {path:'homepage', component:HomepageComponent},
  {path:'loginform', component:LoginComponent},
  {path:'registrationform', component:RegistrationformComponent , canDeactivate:[FormChangesGuard]},
  {path:'menshome', component:MensComponent,
  children:[
    {path:'mensshoes', component:MensShoesComponent},
    {path:'mensshorts', component:MensShortsComponent},
    {path:'menstshirts', component:MensTshirtComponent}]},
    // {path:'airlines', component:AirlineshomeComponent },
    {path:'', component:HomepageComponent},
    {path:'**', component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
