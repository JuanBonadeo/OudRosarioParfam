
import { Box, Typography } from '@mui/material';
import '@fontsource-variable/cinzel';

export const QuienesSomos = () => {
  return (
    <Box 
      id="about-us" 
      sx={{ textAlign: 'center', padding: 3, maxWidth: 1000, margin: 'auto', fontFamily: 'Cinzel Variable' }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Sobre Nosotros
      </Typography>
      <Typography variant="h6" component="p">
        Siempre con un mate la vida es mejor!
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <strong>Nos presentamos:</strong> Somos Walter y Florencia. Somos un emprendimiento familiar que con mucho 
        esfuerzo y amor queremos darles la mejor calidad y atención.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Tenemos desde mates imperiales deluxe, termos Stanley originales, réplicas, bolsos materos, bombillas, 
        cafeteros, stickers para termos y ahora también incorporamos toppings (yerbas compuestas) para darle sabor 
        a tu vida! 😋💯🔥
      </Typography>
      <Typography variant="h6" component="p">
        <strong>¡Hacemos envíos a todo el país!</strong>
      </Typography>
    </Box>
  );
}


