// import app from "./app";
// import env from "./config/env";

// const PORT = env.PORT || 3000;

// app.listen(PORT ,() =>console.log(`App escuchando en el puerto ${PORT}`));

import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
