import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonfeaturesService } from 'src/app/services/commonfeatures.service';


@Component({
  selector: 'app-availablflights',
  templateUrl: './availablflights.component.html',
  styleUrls: ['./availablflights.component.scss']
})
export class AvailablflightsComponent implements OnInit {

  constructor(private _location: Location,private _commonService: CommonfeaturesService) { }

 
  stateData:any;
  filightsData:any; 
  isResultAvailable:boolean=true;

  ngOnInit(): void {
    //------Reading State Data Using history---------
     //this.stateData = history.state;
    //------Reading State Data Using Locatin---------
    this.stateData =this._location.getState();

    if(this.stateData.source!=null)
    {
      let fromName = this.getCityNameFromId(this.stateData.source);
      let toName = this.getCityNameFromId(this.stateData.destination);      
     this.filightsData= this._commonService.getAllFlights().filter(ele=> ele.fsource == fromName && ele.fdestination == toName)    
    }
    else { this.filightsData = this._commonService.getAllFlights(); }  

    if(this.filightsData.length > 0)
    {
      this.isResultAvailable = false;
    }
    
  }

  getCityNameFromId(id:any)
  {
    let cityDetails = this._commonService.getAllCityDetails().filter(ele=> ele.cityId == id);
    let cityName = cityDetails[0].cityName;
    return cityName;
  }

  hideShow()
  {
    
  }

}
