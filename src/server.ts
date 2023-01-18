import express from "express";
import "./database"
import { routes } from './routes';

const app = express();

app.use(express.json());
routes(app);

app.listen(4001, () => console.log("Auth server is running."));
