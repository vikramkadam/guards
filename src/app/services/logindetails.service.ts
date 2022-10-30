import { Injectable } from '@angular/core';
import { first } from 'rxjs';


interface logCredentials
{
  srNo?:number,
  firstName?:any
  userName:any,
  userPass:any
}

@Injectable({
  providedIn: 'root'
})
export class LogindetailsService {

  constructor() { }

  logDetails:logCredentials[]=[{srNo:1,firstName:'vikram', userName:'vicky',userPass:13}];

  getLogDetails()
  {
    return this.logDetails;
  }
  saveLoginDetails(fname:any,uname:any,pass:any)
  {
    let i=this.logDetails.length;
    this.logDetails.push({srNo:i+1,firstName:fname, userName:uname,userPass:pass});
  }


  userChangedValue:boolean= false;

  getUserChangedValue()
  {
    return this.userChangedValue;
  }

  setUserChanges(value:boolean)
  { 
      return this.userChangedValue = value;
  }



}
