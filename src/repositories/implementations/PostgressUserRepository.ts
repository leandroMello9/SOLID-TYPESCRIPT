import { IUsersRepository } from "../IUserRepository";
import { User } from "../../entites/User";

export class PostgresUserRepsitory implements IUsersRepository{
  private users : User[] = [];

  public async findByEmail(email: string): Promise<User> {
    console.log('email', email)
    const userArealdyExist = this.users.find(findUser => findUser.email === email)
   
  
    return userArealdyExist;
  }

  public save(user: User):Promise<void> {
    this.users.push(user);
    return;
  }
}