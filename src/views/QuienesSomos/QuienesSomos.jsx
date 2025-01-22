
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
      <Typography variant="body1" component="p" gutterBottom>
        Bienvenidos a Oud Rosario, donde traemos los mejores aromas de Dubái al <strong>mejor precio</strong> de Rosario (y de todo el país). Somos una tienda online especializada en perfumes árabes, comprometida en acercarte fragancias exóticas y sofisticadas que reflejan la riqueza olfativa del mundo árabe. Además, complementamos nuestra selección con los mejores perfumes europeos, brindando una experiencia olfativa de clase mundial.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
      Nuestra misión es ofrecer a cada cliente una experiencia auténtica en perfumería, llevando la calidad y el arte de los perfumes árabes hasta la puerta de tu casa en cualquier lugar de Argentina. Con envío gratuito a nivel nacional, precios accesibles y un asesoramiento personalizado a través de nuestro chat, queremos hacer que cada elección sea única y especial.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
      Nuestra visión es hacer accesible el lujo en perfumería, acercando la posibilidad de disfrutar de fragancias 100% originales a todos los argentinos. Queremos que cada cliente, sin importar en qué parte del país se encuentre o cuál sea su presupuesto, pueda acceder a perfumes que reflejen su estilo y esencia. Aspiramos a que cada vez que pienses en perfumes únicos y lujosos, pienses en Oud Rosario.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
      Gracias por confiar en nosotros. Divertite explorando nuestro stock y consultanos por cualquier duda que tengas.
      </Typography>
      <Typography variant="h6" component="p">
        <strong>¡Hacemos envíos a todo Rosario y Funes!</strong>
      </Typography>
    </Box>
  );
}


