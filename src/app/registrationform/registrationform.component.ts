import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, fromEventPattern } from 'rxjs';
import { LogindetailsService } from '../services/logindetails.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {

  constructor(private fb:FormBuilder, private logService:LogindetailsService, private _router:Router) { }
  

  RegistrationForm = this.fb.group({
    firstName: ['', Validators.required],
    username:['', Validators.required],
    password: ['', Validators.required],
    cpassword: ['', Validators.required]
})
  ngOnInit(): void 
  {  
    this.RegistrationForm.valueChanges.subscribe(formvalue=>{
      console.log(formvalue);
      if(formvalue.username =="" && formvalue.firstName=="" && formvalue.password =="" && formvalue.cpassword == "")
      {
        this.logService.setUserChanges(false);
      }else
      {
        this.logService.setUserChanges(true);
      }
     
    })
    this.logService.setUserChanges(false);

  }

  get firstName()
  {
    return this.RegistrationForm.get('firstName') as FormControl;
  }
  get username()
  {
    return this.RegistrationForm.get('username') as FormControl;
  }
  get password()
  {
    return this.RegistrationForm.get('password') as FormControl;
  }

  get cpassword()
  {
    return this.RegistrationForm.get('cpassword') as FormControl;
  }


  SubmitDetails()
  {
    
      this.RegistrationForm.markAllAsTouched();

      if(this.password.value ==this.cpassword.value)
      {
        let loginData:any []= this.logService.getLogDetails();
           if( loginData.filter(ele=> ele.userName == this.username.value && ele.userPass == this.password.value).length>0)
           {
            alert('Already their is user with user name :'+this.username.value+'\n'+"Please use another user name.");              
            this.username.setValue('');
            this.password.setValue('');
           }
           else
           {
              this.logService.saveLoginDetails(this.firstName.value,this.username.value, this.password.value);
              alert("Registration Successfuly done.");
              this._router.navigate(['/loginform'],{queryParams:{uname:this.username.value , pass:this.password.value}});

           }
      }
      else
      {
        alert('password and confirm password are not same?');
      }
  }

}
