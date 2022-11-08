import { Box } from '@mui/system';
import * as React from 'react';

export default function Loading () {
    return (
        <Box className='loading' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='40px' height='80vh'>
        <img className='logo' src="/assets/pokemon.svg" alt="pokemon.svg" />
        <span>CARREGANDO...</span>
        </Box>
    );
  }