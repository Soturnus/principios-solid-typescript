import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { FakeUsersRepository } from "../../repositories/implementations/FakeUsersRepository";
import { CreateUserUseController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const fakeUsersRepository = new FakeUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    fakeUsersRepository,
    mailtrapMailProvider
)

const createUserUseController = new CreateUserUseController(
    createUserUseCase
)

export { createUserUseCase, createUserUseController }