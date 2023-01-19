import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import "./database";
import { router } from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(4001, () => console.log("Auth server is running."));
