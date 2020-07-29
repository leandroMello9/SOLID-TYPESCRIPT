import {Request, Response} from 'express'
import { CreateUserCase }  from './CreateUserCase'
  export class CreateUserController {

    constructor(
      private createUserCase: CreateUserCase
    ) {

    }

    public async store(request: Request, response: Response): Promise<Response> {
      const {name, email, password} = request.body

      try {
        const newCreateUser = await this.createUserCase.execute({
          email,
          password,
          name
        })
  
        return response.status(201).json(newCreateUser);
      } catch(err) {
        return response.status(400).json({message: err.message || 'Unexcpect Erro'})
      }
    }
  }