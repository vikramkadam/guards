import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PnfComponent } from './pnf/pnf.component';
import { MensComponent } from './mens/mens.component';
import { MensTshirtComponent } from './mens-tshirt/mens-tshirt.component';
import { MensShoesComponent } from './mens-shoes/mens-shoes.component';
import { MensShortsComponent } from './mens-shorts/mens-shorts.component';
import { MynavComponent } from './mynav/mynav.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { AirlinesModule } from './airlines/airlines.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    PnfComponent,
    MensComponent,
    MensTshirtComponent,
    MensShoesComponent,
    MensShortsComponent,
    MynavComponent,
    RegistrationformComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    ReactiveFormsModule,  
    AirlinesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
