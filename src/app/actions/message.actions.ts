import { createAction, props } from '@ngrx/store';
import { IMessage, Message } from '../models/message.model';



export const message_action=createAction("[Message] action");
export const message_action_success=createAction("[Message] action_success",props<{message:Message}>());
