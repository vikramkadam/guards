import { formatDate } from '@angular/common';
import { AbstractType, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { CommonfeaturesService } from 'src/app/services/commonfeatures.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.scss']
})
export class FlightsearchComponent implements OnInit {

  constructor(private _commonFS:CommonfeaturesService,private fb: FormBuilder, private _router: Router) { }

  currentdate:any;
  ddlFsearchkey:any;
  ddlTsearchkey:any;
  
  citydata:any[] = [];
  citydata2:any[] = [];
  SearchForm:any;
  


  ngOnInit(): void 
  {
    //--------get citydata on load--------
    this.citydata = this._commonFS.getAllCityDetails();
    this.citydata2 = this._commonFS.getAllCityDetails();

    //----------create Date-------------   
   let dateObj = new Date();
   let month = dateObj.getUTCMonth() + 1; //months from 1-12
   let day = dateObj.getUTCDate();
   let year = dateObj.getUTCFullYear();
   if(day.toString().length>1){ this.currentdate = year + "-" + month + "-" + day; }
   else{this.currentdate = year + "-" + month + "-" +"0"+ day;}

   //------creating form------
   this.SearchForm = this.fb.group({
    ddlSource: ['', Validators.required],
    ddlDestination: ['',Validators.required],
    dateofJourney: ['',Validators.required]
    // passengersNo: ['']
   })


  }

  //-----------getter methods-----------------
  get ddlSource() { return this.SearchForm.get('ddlSource') as FormControl; }
  get ddlDestination() { return this.SearchForm.get('ddlDestination') as FormControl; }
  get dateofJourney() { return this.SearchForm.get('dateofJourney') as FormControl; }
  // get passengersNo() { return this.SearchForm.get('passengersNo') as FormControl; }


  //----------on Click of Search------------
  SearchFlights()
  {
      this.SearchForm.markAllAsTouched();      
      if(this.SearchForm.valid && (this.ddlSource.value!=this.ddlDestination.value))
      {
          this._router.navigate(['airlines/availableflights'],
          {state:{source:this.ddlSource.value,destination:this.ddlDestination.value,dateofjounry:this.dateofJourney.value}});
       }else{ alert('invalid details'); }
    }
   
  






  //Filter data form 1st ddl
  changeArrayData(ddlFsearchkey:any)
  {    if(this.ddlFsearchkey!=""){
    this.citydata=this._commonFS.getAllCityDetails();
    this.citydata = this.citydata.filter(ele =>  ele.cityName.startsWith(ddlFsearchkey))
    }
    else
    {
      this.citydata=this._commonFS.getAllCityDetails();
    }   
  }

  //Filter data for 2nd ddl
  changeArrayData2(  ddlTsearchkey:any)
  {    if(this.ddlTsearchkey!=""){
    this.citydata2=this._commonFS.getAllCityDetails();
    this.citydata2 = this.citydata2.filter(ele =>  ele.cityName.startsWith(ddlTsearchkey))
    }
    else
    {
      this.citydata2=this._commonFS.getAllCityDetails();
    }   
  }


  //validation for dropdownlist.
  checkBothDDLValues(ddlfrom:any,ddlto:any,ddlname:any)
  {
      if(ddlfrom == ddlto)
      {
        alert('From & To airports cannot be the same');
           if(ddlname=="ddlDestination")
           {
            this.ddlDestination.setValue(1);
           }else{
            this.ddlSource.setValue(1);
           }
        this.citydata=this._commonFS.getAllCityDetails();
        this.citydata2=this._commonFS.getAllCityDetails();
      }
  }


}
