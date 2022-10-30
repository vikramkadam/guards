import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogindetailsService } from '../services/logindetails.service';

@Injectable({
  providedIn: 'root'
})
export class SavecheckGuard implements CanActivate {
  constructor(private logservice: LogindetailsService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userResponce ;
      if(this.logservice.getUserChangedValue())
      {
        userResponce = confirm("Do you wish to continue?");
       return userResponce;
      }
       else{
        return true;
       }    
  }
  
}
