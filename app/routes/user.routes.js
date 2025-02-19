import express from 'express';

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
   }
}