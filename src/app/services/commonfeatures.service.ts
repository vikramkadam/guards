import { Injectable } from '@angular/core';
import { LogindetailsService } from './logindetails.service';


interface cityformat{cityId:number,cityName:string}

@Injectable({
  providedIn: 'root'
})
export class CommonfeaturesService {

  constructor(private loginServ: LogindetailsService) { }

   getAllCityDetails()
   {
    let cityarray:cityformat[]=[    
    {cityId:1,cityName:'ahmednagar'},
    {cityId:2,cityName:'akola'},
    {cityId:3,cityName:'sambhajinagar'},
    {cityId:4,cityName:'beed'},
    {cityId:5,cityName:'hingoli'},
    {cityId:6,cityName:'jalna'},
    {cityId:7,cityName:'latur'},
    {cityId:8,cityName:'kolhapur'},
    {cityId:9,cityName:'nagpur'},
    {cityId:10,cityName:'nanded'},
    {cityId:11,cityName:'parbhani'},
    {cityId:12,cityName:'pune'},
    {cityId:13,cityName:'thane'},
    {cityId:14,cityName:'satara'},
    {cityId:15,cityName:'wardha'},
    {cityId:16,cityName:'sindhudurg'}]

    return cityarray;
   }


   getAllFlights()
   {
    let allFilghts:any[]=[
      {fId:1,fsource:'ahmednagar',fdestination:'sambhajinagar',fseats:25,favailableseats:6,fstarttime:"10:30am",fendtime:"12:00pm",fbrand:"Indigo",visible:false},
      {fId:2,fsource:'ahmednagar',fdestination:'sambhajinagar',fseats:40,favailableseats:2,fstarttime:"12:30pm",fendtime:"2:30pm",fbrand:"Air India",visible:false},
      {fId:3,fsource:'ahmednagar',fdestination:'sambhajinagar',fseats:40,favailableseats:2,fstarttime:"12:30pm",fendtime:"2:30pm",fbrand:"Air Asis",visible:false},

      {fId:4,fsource:'parbhani',fdestination:'sambhajinagar',fseats:40,favailableseats:2,fstarttime:"12:30pm",fendtime:"2:30pm",fbrand:"Air India",visible:false},
      {fId:5,fsource:'parbhani',fdestination:'sambhajinagar',fseats:30,favailableseats:2,fstarttime:"6:00am",fendtime:"10:00am",fbrand:"Air India",visible:false},
      {fId:6,fsource:'parbhani',fdestination:'pune',fseats:18,favailableseats:12,fstarttime:"12:30pm",fendtime:"2:30pm",fbrand:"Air India",visible:false},
      {fId:7,fsource:'parbhani',fdestination:'pune',fseats:40,favailableseats:2,fstarttime:"12:30pm",fendtime:"2:30pm",fbrand:"Indigo",visible:false}]

      return allFilghts;
   }
   
}
