import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.scss']
})
export class MynavComponent implements OnInit {

  constructor(private router:Router) { }


  is_user:any; 

  ngOnInit(): void 
  {
    this.is_user= localStorage.getItem('UserName');   

    let user:any=localStorage.getItem('UserName');
    if(user==null)
    {
      this.router.navigate(['/homepage']);
    }

  }
  

  logoutMethod()
  {
    confirm("are you sure, you want to log out?")
    localStorage.clear();
    window.location.reload();      
  }

}
