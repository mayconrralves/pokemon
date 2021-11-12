import React, {useState, useEffect} from 'react';
import { getPokemon } from '../../api';
import { Container } from '../styles';

const MAX_POKEMON_NUMBER = 10;

export default function ListPokemon(){
    const [pokemon, setPokemon] = useState([]);
    const [numberPokemon, setNumberPokemon] = useState(1);
    const nextPokemon = () => {
        if( numberPokemon+1 > MAX_POKEMON_NUMBER){
            setNumberPokemon(1);
        }
        else {
            setNumberPokemon(numberPokemon+1);
        }
    }
    const previusPokemon = () => {
        if( numberPokemon-1 < 1){
            setNumberPokemon(MAX_POKEMON_NUMBER);
        }else {
            setNumberPokemon(numberPokemon-1);
        }
    }
    useEffect(()=>{
     const  getPoke = async ()=>{
         const poke1 = numberPokemon-1 >= 1 ? await getPokemon(numberPokemon-1) : null;
         const poke2 = await getPokemon(numberPokemon);
         const poke3 = numberPokemon+1 <= MAX_POKEMON_NUMBER ? await getPokemon(numberPokemon+1) : null;
         setPokemon([poke1, poke2, poke3]);
     }
     getPoke();
    }, [numberPokemon]);
    return (
        <div>
            {!pokemon && <div>Carregado...</div>}
            {pokemon &&
                <Container>
                    <div>
                        {
                            pokemon.map((poke,i)=>(
                                    
                                    poke && <div>
                                        <h2 key={poke.name+i}>{poke.name} #{poke.id}</h2>
                                        <img key={'img'+i}src={poke.sprites.other.dream_world.front_default}/>
                                    </div>
                            ))
                        }
                    </div>
                    <div>
                        <button onClick={previusPokemon}>Previous</button>
                        <button onClick={nextPokemon}>Next</button>
                    </div>
                </Container>
            }
        </div>
    )

}