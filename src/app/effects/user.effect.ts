import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';

import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as UserActions from '../actions/login.actions'
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class UserEffects{
  constructor(private actions :Actions,private auth:AuthService){}
  registerUser:Observable<Action>=createEffect(()=>this.actions.pipe(
    ofType(UserActions.register_user),
    switchMap(({user})=>of(user))
    ,map(user=>UserActions.register_user_success({user:user}))));

    loginUser:Observable<Action>=createEffect(()=>this.actions.pipe(
      ofType(UserActions.login_user),
      switchMap(({user})=>of(user))
      ,map(user=>UserActions.register_user_success({user:user}))));
    }
