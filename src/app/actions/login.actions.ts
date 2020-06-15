import { createAction, props } from '@ngrx/store';
import { MyUser } from '../models/user.model';


//pomocu propsa mozemo da menjamo objekat
export const login_user=createAction("[Login] login",props<{user:MyUser}>());
export const login_user_success=createAction("[Login] login_success",props<{user:MyUser}>());
export const login_user_fail=createAction("[Login] login_fail");
export const register_user=createAction("[Register] register",props<{user:MyUser}>());
export const register_user_success=createAction("[Register] register_success",props<{user:MyUser}>());
