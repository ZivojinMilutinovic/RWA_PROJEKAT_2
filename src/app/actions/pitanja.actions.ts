import { Pitanje } from '../models/Pitanje.model';
import { createAction, props } from '@ngrx/store';


export const ADD_ONE=createAction('[Pitanje] DODAJ_JEDNO',props<{pitanje:Pitanje}>());

export const DELETE_ONE=createAction('[Pitanje] IZBRISI_JEDNO',props<{id:string}>());
export const GET_ALL=createAction('[Pitanje] UZMI_SVA',props<{pitanje:Pitanje[]}>());

export const CLEAR_ALL=createAction('[Pitanje] Resetuj_pitanja');
