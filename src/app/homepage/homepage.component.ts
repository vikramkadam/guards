import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private _roter:Router) { }
 // logedUser:any;
 userName:any='';
  
  ngOnInit(): void {
  //  this.logedUser=history.state;
  this.userName= localStorage.getItem('UserName'); 
  }


  logoutMethod()
  {
    localStorage.clear();
    window.location.reload();       
  }
}
