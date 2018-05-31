import { combineReducers } from 'redux'
import {fakeReducer, typesReducer } from './fake-reducer'

const rootReducer = combineReducers({
  fake: fakeReducer,
  PokemonTypes: typesReducer
});

export default rootReducer
