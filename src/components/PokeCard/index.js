import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Hability from '../Hability';

export default function ActionAreaCard(props) {

  const { pokemon, image } = props

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia className='image-pokemon'
          component="img"
          height="400"
          image={image}
          alt="pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" fontWeight='900' textAlign='center'>
            {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
          </Typography>


          {pokemon.types.length === 1 && (
            <Box display='flex' justifyContent='space-around'>
              <Hability type={pokemon?.types[0]?.type.name} />
            </Box>
          )}

          {pokemon.types.length === 2 && (
            <Box display='flex' justifyContent='space-around'>
              <Hability type={pokemon?.types[0]?.type.name} />
              <Hability type={pokemon?.types[1]?.type?.name} />
            </Box>
          )}

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
