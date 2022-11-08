import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PokeCard from '../components/PokeCard'
import { Container } from "@mui/system";
import { Grid } from '@mui/material';
import axios from 'axios';
import Loading from '../components/Loading/Loading';



export const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const qtdPokemons = 90

  useEffect(() => {
    
    getPokemons(qtdPokemons)
    
// eslint-disable-next-line
  },[qtdPokemons])


  const getPokemons = qtdPokemons => {
    let endpoints = [];

    for (let i = 1; i <= qtdPokemons; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => { setPokemons(res) })
      .catch((e) => { console.log(e) })
    console.log(pokemons)
  }

  const filterPokemons = params => {

    if (params === '') {
      getPokemons(qtdPokemons)
    } else {

      let filteredPokemon = pokemons.filter(pokemon => {
        if (pokemon.data.name.toLowerCase().indexOf(params.toLowerCase()) > -1) {
          return true
        } else {
          return false
        }
      })
      setPokemons(filteredPokemon)
    }
  }

  return (
    <>
      <Navbar filterPokemons={filterPokemons} />
      <Container maxWidth='xl'>

        {pokemons.length === 0 ? <Loading /> :

          <Grid container spacing={4} rowSpacing={4}>
            {
              pokemons?.map((pokemon, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <PokeCard pokemon={pokemon.data} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.data.id}.png`} />
                  </Grid>
                )
              })
            }
          </Grid>

        }



      </Container>

    </>
  );
}

export default Home;