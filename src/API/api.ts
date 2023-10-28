import axios from 'axios';
import PropsDefault, { IPost } from '../components/models';

export default class PokemonApi {
  private static _link: string = 'https://pokeapi.co/api/v2/pokemon';

  static async getALL() {
    const response = await axios.get(`${this._link}`);
    const pokemonDates: IPost[] = [];
    const promises = response.data.results.map(async (e: PropsDefault) => {
      return await this.getByURL(e.url);
    });
    const resolvedPromises = await Promise.all(promises);
    pokemonDates.push(...resolvedPromises);
    return pokemonDates;
  }

  static async getByURL(URL: string) {
    const response = await axios.get(URL);
    return response.data;
  }

  static async getByName(name: string = 'bulbasaur') {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
