
import axios from 'axios';

export default class Service {

  getPlanets(randomNumber) {
    return new Promise((resolve, reject) => {
      axios.get(`https://swapi.co/api/planets/${randomNumber}/`)
                .then(result => resolve(result.data))
                .catch(error => reject(error));
    });
  }

}
