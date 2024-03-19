import mysql from 'mysql2/promise';
import 'dotenv/config'

var connection = await mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  user     : process.env.USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_NAME,
  port     : process.env.DATABASE_PORT
});
 
export default connection;