import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogindetailsService } from '../services/logindetails.service';

@Injectable({
  providedIn: 'root'
})
export class FormChangesGuard implements CanDeactivate<unknown> {

  constructor(private logservice: LogindetailsService){}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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
