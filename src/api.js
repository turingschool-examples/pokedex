export const fetchPokemon = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
}

// export const fetchPokemon = async(url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }