import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUserRepository } from "../repositories/createUserRepository";

export async function registerUserController(req: Request, res: Response) {
  const { name, email, address, password, cpf } = req.body;

  const passwordCrypt = bcrypt.hashSync(password, 12);

  await createUserRepository(res, {
    name,
    password: passwordCrypt,
    email,
    address,
    cpf,
  });

  try {
    return res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    return res.status(401).json({ error });
  }
}
