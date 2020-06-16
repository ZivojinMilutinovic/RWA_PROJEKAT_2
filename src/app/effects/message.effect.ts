import { Injectable } from "@angular/core";
import { Observable ,pipe} from 'rxjs';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';


import * as MessageActions from "../actions/message.actions"
import { switchMap ,map} from 'rxjs/operators';
import { ToastService } from '../services/toast.service';
import { Message } from '../models/message.model';


@Injectable()
export class MessageEffect{
  constructor(private actions:Actions,private tstService:ToastService){}
  messageEffect:Observable<Action>=createEffect(()=>this.actions.pipe(
    ofType(MessageActions.message_action),
    switchMap(()=>this.tstService.getMessages('1').pipe(map(el=>{
      let myData=el.payload.data() ;
      const msg=new Message(myData.content);
      return msg;
    })))
    ,map(data=>MessageActions.message_action_success({message:data}))
  ))
}
