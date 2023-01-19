import express, { NextFunction, Request, Response } from "express";
import "./database";
import { routes } from "./routes";
import "express-async-errors";

const app = express();

app.use(express.json());
routes(app);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      message: "Internal server error",
    });
  }
);

app.listen(4001, () => console.log("Auth server is running."));
