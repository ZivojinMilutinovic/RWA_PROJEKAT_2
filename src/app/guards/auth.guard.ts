import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
//mora da vraca boolean da zastitimo neku rutu od pogresnih prostupa
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private afs:AngularFirestore){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user$.pipe(
      take(1),
      map(user=>{
        return user.role=="admin";

      })

    )
  }

}
