import { MailTrapMailProvider } from "../../providers/Mail/implementations/MailTrapMailProvider";
import { PostgresUserRepsitory } from "../../repositories/implementations/PostgressUserRepository";
import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUserRepsitory();

const createUserCase = new CreateUserCase(
  postgresUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(createUserCase);

export {createUserCase, createUserController};