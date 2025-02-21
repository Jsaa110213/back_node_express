// No olvidemos agregar siempre la extensión .js para importar modulos

import express from 'express';
import 'dotenv/config'
import { UserRoutes } from './routes/user.routes.js';
import { Database } from './config/database.config.js'

// Creación de la instacia de express
const app = express();
const port = process.env.APP_PORT || 3001; // Puerto de la app

// Middlewares
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Instancia de la conexión a la base de datos en MariaDB con XAMPP
const database = new Database();
database.connection();

const userRoutes = new UserRoutes(); // Instancia de la clase UserRoutes para las rutas

userRoutes.initUserRoutes(app); // Inicialización de las rutas

// Inicialización del servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});