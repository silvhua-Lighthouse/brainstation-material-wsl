import API_ACCESS_TOKEN from './data/secrets';
import axios from "axios";


export class TmdbApi {
  
  constructor(API_ACCESS_TOKEN) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.options = {
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${API_ACCESS_TOKEN}`
      }
    }
  }
  
  logResponse(response) {
    // Helper method to perform console.log() on API response objects.
    console.log(`API response status ${response.status}: ${response.statusText}.`)
  }
  
  async get(endpoint) {
    /* Helper method for making GET requests (following DRY principle). 
    Called upon by the `.getComments()` and `.getShows()` methods. */
    const requestUrl = `${this.baseUrl}${endpoint}`;
    console.log('requestUrl', requestUrl);
    try {

      const response = await axios.get(requestUrl, this.options)
      this.logResponse(response);
      const itemsArray = response.data;
      return itemsArray;
    } catch (error) {
      console.error(`GET request for "${endpoint}" endpoint failed: ${error}`)
      return false;
    }
  }
  // async getMovies() {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: `Bearer ${API_ACCESS_TOKEN}`
  //     }
  //   };
    
  //   const apiResponse = fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  //     .then(response => response.json())
  //     .then(response => response.results)
  //     // .then(response => console.log(response))
  //     // .catch(err => console.error(err));
  //     return apiResponse;
  // }

  
  async getMovies() {
    const movies = await this.get('discover/movie')
    return movies.results;
  }
  
}

const apiInstance = new TmdbApi(API_ACCESS_TOKEN);
export default apiInstance;