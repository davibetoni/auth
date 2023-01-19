import { User } from "../../entities/user";
import { IUsersRespository } from "../../repositories/UsersRepository";
import { ICreateUserAttributesDTO } from "./CreateUserDTO";

export class CreateUserUseCase{
  constructor(
    private usersRepository: IUsersRespository
  ){}
  
  async execute(data: ICreateUserAttributesDTO){
    const { email } = data

    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists){
      throw new Error("Email already in use.")
    }

    const user = new User(data)

    await this.usersRepository.save(user)
  }
}