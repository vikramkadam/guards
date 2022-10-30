import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogindetailsService } from '../services/logindetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router, private fb: FormBuilder, private _logService :LogindetailsService,private _activatedR:ActivatedRoute) { }
  loginForm:any;
  
  ngOnInit(): void 
  {   

    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
    let user:any=localStorage.getItem('UserName');
    if(user!=null)
    {
      this._router.navigate(['/homepage']);
    }

    this._activatedR.queryParamMap.subscribe((param:any)=>{
      this.username.setValue(param.get('uname'));
      this.password.setValue(param.get('pass'));
    })  
  }

  get username() { return this.loginForm.get('username') as FormControl; }

  get password() { return this.loginForm.get('password') as FormControl; }



  LoginProcess()
  {
    let logdata:any[]= this._logService.getLogDetails();
    if(logdata.filter(ele=> ele.userName==this.username.value && ele.userPass== this.password.value).length>0)
    {
       localStorage.setItem('Active','true');
       localStorage.setItem('UserName',this.username.value);
       window.location.reload();
        
        // this._router.navigate(['/homepage'],{state:{loginuser:this.username.value}})
    }
    else
    {
      alert('invalid Login Details');
      this.username.setValue('');
      this.password.setValue('');
    }
  }


}
