import React, {useState, useEffect, useMemo} from 'react';
import { getPokemon } from '../../api';
import { Container } from '../styles';

const MAX_POKEMON_NUMBER = 151;

export default function ListPokemon(){
    const [pokemon, setPokemon] = useState([]);
    const [numberPokemon, setNumberPokemon] = useState(1);
    const [isPrevious, setIsPrevious] = useState(false);
    const direction = useMemo(()=> isPrevious, [isPrevious]);

    /*Calc previous number */
    const calcNumberPreviousPokemon = (value)=> {
        if(value-1 === 0)  return MAX_POKEMON_NUMBER;
        if(value-1 < 0) return MAX_POKEMON_NUMBER+value;
        return value-1;
    }
    /*Calc next number*/
    const calcNumberNextPokemon = (value) => {
        value = value+1;
        if( value > MAX_POKEMON_NUMBER ) return value - MAX_POKEMON_NUMBER;
        return value;
    }
    /*skip to the  next pokemon*/
    const nextPokemon = () => {
        setNumberPokemon(calcNumberNextPokemon(numberPokemon));
        setIsPrevious(false);
    }
    /* skip to the previous pokemon*/
    const previousPokemon = () => {
       setNumberPokemon(calcNumberPreviousPokemon(numberPokemon));
       setIsPrevious(true);
    }
    useEffect(()=>{
     const  getPoke = async ()=>{
         if(!pokemon.length){
             const poke1 = await getPokemon(calcNumberPreviousPokemon(numberPokemon));
             const poke2 = await getPokemon(numberPokemon);
             const poke3 = await getPokemon(calcNumberNextPokemon(numberPokemon));
             setPokemon([poke1, poke2, poke3]);
         }else {
             if(!direction) {
                const poke = await getPokemon(calcNumberNextPokemon(numberPokemon));
                setPokemon([...pokemon.slice(1), poke]);
            }
            else {
                const poke = await getPokemon(calcNumberPreviousPokemon(numberPokemon));
                setPokemon([poke, ...pokemon.slice(0,2)]);
            }
         }
     }
     getPoke();
    }, [numberPokemon]);
    return (
        <div>
            {!pokemon.length && <div>Carregado...</div>}
            {pokemon.length &&
                <Container>
                    <div>
                        {
                            pokemon && <>
                                <div  onClick={previousPokemon}>
                                        <h2>{pokemon[0].name} #{pokemon[0].id}</h2>
                                        <img src={pokemon[0].sprites.other.dream_world.front_default}/>
                                </div>
                                <div  onClick={previousPokemon}>
                                        <h2>{pokemon[1].name} #{pokemon[1].id}</h2>
                                        <img src={pokemon[1].sprites.other.dream_world.front_default}/>
                                </div>
                                <div  onClick={nextPokemon}>
                                        <h2>{pokemon[2].name} #{pokemon[2].id}</h2>
                                        <img src={pokemon[2].sprites.other.dream_world.front_default}/>
                                </div>
                            </>
                        }
                    </div>
                </Container>
            }
        </div>
    )

}