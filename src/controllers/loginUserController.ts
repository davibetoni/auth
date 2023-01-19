import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { authenticateRepository } from "../repositories/authenticateRepository";

export async function loginUserController(req: Request, res: Response) {
  const { email, password } = req.body;

  const userId = await authenticateRepository(res, email, password);

  const accessToken = sign({ id: userId }, "access_secret", {
    expiresIn: 60 * 60,
  });

  res.send({ message: "success", token: accessToken });
}
