import { createReducer, on } from "@ngrx/store";
import * as Actions from '../actions/message.actions'


const _message_reducer=createReducer(on(Actions.message_action,state=>state),
                                      on(Actions.message_action_success,(state,{message})=>
                                       {return {...state,...message}} ));
export function message_reducer(action,state){
  return _message_reducer(action,state);
}
