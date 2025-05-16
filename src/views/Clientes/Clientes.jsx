// Clientes.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
const fotos = [
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1737565893/xprso7hwjqhqwxpmpo6b.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1737740378/tzpi8mnwbnko3okvdatt.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1737740378/cizkpdl26tw4tr94yi3l.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1737740379/qtncsg5plzvfqckhgusm.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1738251404/tm0pqkti72zjkdreb5cf.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1738251403/uhb3rit7tparq3odjyyp.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1739541746/ww5jzmpuarugrq1tfesk.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1747396859/zbukd89fo7k1fl65prlw.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1747396856/m0jagriapm6htvcaizrq.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1747396856/tf1cjxx4anejck8wfcwv.jpg",
    "https://res.cloudinary.com/do36rxfoe/image/upload/v1747396832/e9em35kglbytru22ijp9.jpg"
  ,

];
export const Clientes = () => {
  return (
    <div sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', p: '1em' }}>
        Nuestros Clientes
      </Typography>
      <Grid container spacing={2}>
        {fotos.map((foto, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ padding: '10px', textAlign: 'center' }}>
              <img
                src={foto}
                alt={`Cliente ${index + 1}`}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

