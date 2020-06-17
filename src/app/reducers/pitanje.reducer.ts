import { Pitanje } from '../models/Pitanje.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as Actions from "../actions/pitanja.actions"
import { on, createReducer, createFeatureSelector } from '@ngrx/store';

const pitanjeAdapter=createEntityAdapter<Pitanje>();

export interface PitanjeState extends EntityState<Pitanje>{}

const initialState:PitanjeState=pitanjeAdapter.getInitialState();

const _pitanjeReducer=createReducer(initialState,on(Actions.ADD_ONE,(state,{pitanje})=>{
return pitanjeAdapter.addOne(pitanje,state);
}),

on(Actions.DELETE_ONE,(state,{id})=>{
  return pitanjeAdapter.removeOne(id,state)
}),
on(Actions.GET_ALL,(state,{pitanje})=>{
  return pitanjeAdapter.setAll(pitanje,state);
}),
on(Actions.CLEAR_ALL,state=>{
  console.log(state);
  return pitanjeAdapter.removeAll({...state});
}))

export function pitanjeReducer(action,state){
  return _pitanjeReducer(action,state);
}
export const getPitanjeState=createFeatureSelector<PitanjeState>("pitanja");
 const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = pitanjeAdapter.getSelectors(getPitanjeState);

export const selectPitanjeIds = selectIds;

// select the dictionary of user entities
export const selectPitanjeEntities = selectEntities;

// select the array of users
export const selectAllPitanja = selectAll;

// select the total user count
export const selectPitanjaTotal = selectTotal;
