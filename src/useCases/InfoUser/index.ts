import { InfoUserController } from './InfoUserController';
import { InfoUserUseCase } from './InforUserUseCase';
import { MongoDBInfoUserRepository } from "../../implementations/MongoDBInfoUserRepository";


const mongoDBInfoUserRepository = new MongoDBInfoUserRepository();

const infoUserUseCase = new InfoUserUseCase(
    mongoDBInfoUserRepository
);

const infoUserController = new InfoUserController(
    infoUserUseCase
);

export { infoUserUseCase, infoUserController}