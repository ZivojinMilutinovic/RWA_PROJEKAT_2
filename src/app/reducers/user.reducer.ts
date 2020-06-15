import { createReducer, on } from "@ngrx/store";

import * as Actions from '../actions/login.actions'


const _userReducer=createReducer(on(Actions.login_user,(state,{user})=>state),
                                  on(Actions.login_user_success,(state,{user})=>{
                                    return {...state,...user};
                                  }),
                                  on(Actions.login_user_fail,state=>null),
                                  on(Actions.register_user,(state,{user})=>state),
                                  on(Actions.register_user_success,(state,{user})=>{
                                    return {...state,...user};
                                  }))
export function userReducer(action,state){
  return _userReducer(action,state);
}
