import { Response } from "express";
import { User } from "../models/user";

interface CreateUserAttributes {
  name: string;
  email: string;
  password: string;
  cpf: string;
  address: string;
}

export async function createUserRepository(
  res: Response,
  params: CreateUserAttributes
) {
  const { email } = params;

  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.status(400).json({ message: "Email already in use." });
  }

  const newUser = User.build(params);

  try {
    return await newUser.save();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
