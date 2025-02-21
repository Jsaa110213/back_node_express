import { Sequelize } from "sequelize";

export const DataBaseConfig = new Sequelize({
   host: 'localhost',
   database: 'ti-41',
   username: 'root',
   password: '',
   dialect: 'mysql',
   timezone: '-05:00',
   port: 3306,
   logging: false,
   pool: {
      max: 5,
      min: 5,
      acquire: 60000,
      idle: 15000,
   }
})

export class Database {
   
   async connection() {

      try {
         await DataBaseConfig.authenticate();
         console.log('Connection has been established successfully.');
         return {ok: true, message: 'Connection to the database has been established successfully.'};
      }
      catch (error) {
         console.error('Unable to connect to the database:', error);
         return {ok: false, message: `Could not connect to the database. Please the check to the following: ${error}`};
      }

   }
} 
