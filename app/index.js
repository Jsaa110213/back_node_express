// No olvidemos agregar siempre la extensión .js para importar modulos

import express from 'express';
import 'dotenv/config'
import { UserRoutes } from './routes/user.routes.js';

const app = express();
const port = process.env.APP_PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


const userRoutes = new UserRoutes();

userRoutes.initUserRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});