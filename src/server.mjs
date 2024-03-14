import express from "express";
import routeConfig  from "./routes/routeConfig.mjs"

const app = express();
const port = 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());

app.use('/', routeConfig);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});