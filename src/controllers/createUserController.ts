import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUserRepository } from "../repositories/createUserRepository";

export async function registerUserController(req: Request, res: Response) {
  const { name, email, address, password, cpf } = req.body;

  const passwordCrypt = bcrypt.hashSync(password, 12);

  const user = await createUserRepository(res, {
    name,
    password: passwordCrypt,
    email,
    address,
    cpf,
  });

  try {
    return res.json({ user });
  } catch (error) {
    return res.status(401).json({ error });
  }
}