import {IUsersRepository} from '../../repositories/IUserRepository'

import { ICreateUserRequestDTO } from './CreateUserDTO'
import { User } from '../../entites/User'
import { IMailProvider } from '../../providers/Mail/IMailProvider'

export class CreateUserCase{

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {
    
  }
  public async execute({ email, password, name }: ICreateUserRequestDTO): Promise<User> {
    const userAlreadyExist = await this.usersRepository.findByEmail(email)
  
    if(userAlreadyExist) {
      throw new Error('User Already exist')
    }

    const user = new User({
      email,
      password,
      name
    })
    
    await this.usersRepository.save(user);
    
    await this.mailProvider.sendMail({
      to: {
        name,
        address: email
      },
      from: {
        address: "meuapp@gmail.com",
        name: 'Equipe Teste'
      },
      subject: 'Seja bem a plataforma',
      body: `<p>Bem vindo ${name}, você ja pode fazer login no nosso sistema</p>`
    })
    return user;
  }
}