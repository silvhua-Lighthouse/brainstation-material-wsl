import apiInstance from "./poke-api.js";
import fs from 'fs';

async function getPokemon(id) {
  const response = await apiInstance.getPokemonByType(id);
  return response;
}

async function app() {
  const id = process.argv[2] || 13;
  console.log(`Fetching Pokemon of type ID ${id}`);
  const pokeResponse = await getPokemon(id);
  
  fs.writeFileSync('./data.json', JSON.stringify(pokeResponse, null, 2));

}


app();