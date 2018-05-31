export const fakeReducer = (state='this is a fake action', action) => {
  switch (action.type) {
  default:
    return state;
  }
};


export const typesReducer = (state=[], action) => {
  switch (action.type) {
    case 'SEND_POKEMON_TYPES':
  return action.types
  default:
    return state;
  }
};