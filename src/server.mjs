import express from "express";
import routeConfig  from "./routes/routeConfig.mjs"
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());

app.use('/', routeConfig);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});