import { MongoDBUsersRepository } from "../../implementations/MongoDBUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mongoDBUsersRepository = new MongoDBUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    mongoDBUsersRepository,
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }