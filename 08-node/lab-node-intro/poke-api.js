
import axios from "axios";

export class PokeApi {
  constructor() {
    this.baseUrl = 'https://pokeapi.co/api/v2/';
    // this.options = {
    //   headers: {
    //     accept: 'application/json',
    //   }
    // }
  }
  
  async get(endpoint) {
    /* Helper method for making GET requests (following DRY principle). 
    Called upon by the `.getComments()` and `.getShows()` methods. */
    const requestUrl = `${this.baseUrl}${endpoint}`;
    console.log('requestUrl', requestUrl);
    try {

      const response = await axios.get(requestUrl)
      // const response = await axios.get(requestUrl, this.options)
      this.logResponse(response);
      // console.log('Raw get response:\n', response)
      return response.data;
    } catch (error) {
      console.error(`GET request for "${endpoint}" endpoint failed: ${error}`)
      return false;
    }
  }
  
  async getPokemonByType(id) {
    /* https://pokeapi.co/docs/v2#pokemon */
    const response = await this.get(`type/${id}`)
    return response.pokemon;
  }
  
  logResponse(response) {
    // Helper method to perform console.log() on API response objects.
    console.log(`API response status ${response.status}: ${response.statusText}.`)
  }
}

const apiInstance = new PokeApi();
export default apiInstance;