// Clientes.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
const fotos = [
    "https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/clientes%2F24231f8c-4f22-4297-a5cd-2db52e03322a.jpg?alt=media&token=1ed2e017-ab0d-4765-a1df-aa9521361ea4",
    "https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/clientes%2F4e93bee0-9eb4-432e-9822-a3d95304ca1d.jpg?alt=media&token=90b5d853-870a-47d8-8b7f-cf622bd2a78c",
    "https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/clientes%2Fa5192aee-e699-4ca0-96af-b4f7c37122e3.jpg?alt=media&token=aba4fd8d-eea8-4056-95f1-7e22174e2ea3",
    "https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/clientes%2Fabede59a-a7fb-4e8a-b986-ab4625ab274b.jpg?alt=media&token=20b4cecd-0641-4754-8f14-272abee6e441",
    "https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/clientes%2Fc0947015-10e5-430d-9df3-7362e9d05c5d.jpg?alt=media&token=a390ceb0-d00e-4b1c-a533-b3556c6cfe64",
    "https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/clientes%2F34e41eff-f2de-4d44-9d6b-5d1d479f1be1.jpg?alt=media&token=f7b4fb9e-d258-48d6-8e78-06b2f212baa7",
    "https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/clientes%2F7c6a1583-2276-41d5-afc4-a8696121d9d9.jpg?alt=media&token=56b46c9c-8f08-4f33-9fed-538b8a6065b8",
    "https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/clientes%2Ffa962a0e-7a69-4ba8-a7f2-a3c1bf812437.jpg?alt=media&token=2039738b-1097-46b7-b335-89b76dfbe4e7"

];
export const Clientes = () => {
  return (
    <div sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mt: 15}}>
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

