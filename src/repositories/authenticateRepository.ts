import { Response } from "express";
import { User } from "../models/user";
import { compare } from "bcrypt";

export async function authenticateRepository(
  res: Response,
  email: string,
  password: string
) {
  const user = await User.findOne({ where: { email } });

  if (!user || !(await compare(password, user.dataValues.password))) {
    return res.status(400).send({ message: "Invalid Credentials" });
  }

  return user.dataValues.id
}
