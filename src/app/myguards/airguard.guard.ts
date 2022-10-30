import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirguardGuard implements CanActivate {
  constructor(private _route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     if(localStorage.getItem('Active'))
     {
      return true;
     }
     else
     {
      alert('please login first!')
      this._route.navigate(['/loginform']);
      return false;
    
     }


   
  }
  
}
