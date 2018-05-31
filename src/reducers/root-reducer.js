import { combineReducers } from 'redux'
import {fakeReducer, pokemonTypesReducer, sendPokemonTypes } from './fake-reducer'

const rootReducer = combineReducers({
  fake: fakeReducer,
  pokemonTypes: pokemonTypesReducer,
  sendPokemonTypes
});

export default rootReducer
