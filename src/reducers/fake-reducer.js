export const fakeReducer = (state='this is a fake action', action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export const pokemonTypesReducer = (state=[], action) => {
  switch (action.type) {
    case 'POKEMON_TYPES_ACTION':
  return action.types
  default:
    return state;
  }
};

export const sendPokemonTypes = (state=[], action) => {
  switch (action.type) {
    case 'SEND_POKEMON_ACTION':
  return action.types
  default:
    return state;
  }
};