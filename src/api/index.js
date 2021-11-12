import axios from 'axios';


const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});
/**
 * get all pokemon
 * limit=20
 * offset=20
 */
export const getPokemon = async (id=1)=>{
    try {
        const result = await api.get(`/pokemon/${id}`);
        return result.data;
    }catch(error){
        return error.error;
    }
  
}