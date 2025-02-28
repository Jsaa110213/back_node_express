import express from 'express';
import { UserModel } from '../model/user.model.js';

export class UserRoutes {

   initUserRoutes(app = express.application) {

      app.get('/hello', (req, res) => {
         res.send('Hello World!');
      });

      app.get('/hi', (req, res) => {
         res.send('<p>Holaaaa</p> <iframe width="560" height="315" src="https://www.youtube.com/embed/JmJ1WUoUIK4?si=LENPTfCN05Cv2CH3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
      });

      app.get('/bye', (req, res) => {
         res.status(404).send('Not Found!');
      });

      app.post('/user-data', (req, res) => {
         
         const {user, password} = req.body;

         console.log('Json object', req.body);
         console.log(user, password)
         res.status(200).send(`Hello ${user}, yuo are awesome!!`)

      });

      app.post('/get-users', async(req, res) => {

         try {
            const {condition} = req.body;
            const user = await UserModel.findAll({
               where: condition
            });

            console.log('user', user);
            res.status(200).send({ ok: true, data: user })

         } catch (error) {
            console.log('Error', error);
            res.status(500).send({ ok: false, message: 'Internal server error' })
            
         }

      })

      app.post('/create-user', async(req, res) => {

         try {
            const { user } = req.body;
            const newUser = await UserModel.create(user);
            res.status(200).send({ ok: true, data: newUser });

         } catch (error) {
            console.log('Error:', error);
            res.status(500).send({ ok: false, message: 'Internal server error' });
         }

      });

      app.put('/update-user', async(req, res) => {

         const { condition, user } = req.body

         try {

            const existingUser = await UserModel.findOne({ where: condition });

             if (!existingUser) {
               return res.status(404).send({ ok: false, message: "Usuario no encontrado" }); // Si el usuario no existe
             }

            await UserModel.update(user, { where: condition }); // Actualizar el usuario con los nuevos datos

            const updatedUser = await UserModel.findOne({ where: condition }); // Obtener los datos actualizados del usuario

            res.status(200).send({  // Responder con los datos actualizados del usuario
              ok: true, data: [
                  { id: updatedUser.id, name: updatedUser.name, password: updatedUser.password, created_at: updatedUser.created_at, },
               ],
            });

         } catch (error) {
            console.log('Error:', error);
            res.status(500).send({ ok: false, message: 'Internal server error to try user data' });
         }
      })

   }
}