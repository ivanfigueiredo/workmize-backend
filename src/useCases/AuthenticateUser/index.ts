import { MongoDBAuthRepository } from "../../implementations/MongoDBAuthRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";



const mongoDBAuthRepository = new MongoDBAuthRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
    mongoDBAuthRepository
);

const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
);

export { authenticateUserUseCase, authenticateUserController }