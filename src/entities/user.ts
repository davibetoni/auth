import Sequelize, { Model } from "sequelize";
import { sequelize } from "../database";
import { randomUUID as uuid } from "node:crypto";
import { hashSync } from "bcrypt";
import { EnumType } from "typescript";

interface CreateUserAttributes {
  name: string;
  email: string;
  password: string;
  cpf: string;
  address: string;
}

interface UserAttributes extends CreateUserAttributes {
  id: string;
  role: EnumType;
}

export class User
  extends Model<UserAttributes, CreateUserAttributes>
  implements UserAttributes
{
  id!: string;
  role!: EnumType;
  password!: string;
  name!: string;
  email!: string;
  cpf!: string;
  address: string;
}

User.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.ENUM,
      values: ["customer", "admin", "manager"],
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    cpf: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    tableName: "users",
  }
);

User.beforeCreate((user) => {
  user.id = uuid();
  user.password = hashSync(user.password, 12);
});
