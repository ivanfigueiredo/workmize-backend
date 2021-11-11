import { MongoDBGetGroupUsersRespository } from "../../implementations/MongoDBGetGroupUsersRepository";
import { GroupUsersController } from "./GroupUsersController";
import { GroupUsersUseCase } from "./GroupUsersUseCase";


const mongoDBGetGroupUsersRepository = new MongoDBGetGroupUsersRespository();

const groupUsersUseCase = new GroupUsersUseCase(
    mongoDBGetGroupUsersRepository
);

const groupUsersController = new GroupUsersController(
    groupUsersUseCase
);

export { groupUsersUseCase, groupUsersController }