import { User } from '../../entities/User';
import { hash } from 'bcrypt';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from './CreateUserDTO';
import { sign } from 'jsonwebtoken';

export class CreateUserUseCase {
   constructor(
      private usersRepository: IUsersRepository
   ){}

   async execute(data: ICreateUserDTO) {
      const userAlreadyExists = await this.usersRepository.findByEmail(data.email);  

      if(userAlreadyExists) {
         throw new Error('User already exists.');
      }

      const passwordHash = await hash(data.password, 8);
      
      const user = new User({
         name: data.name,
         email: data.email,
         password: passwordHash,
         isAdmin: data.isAdmin,
         avatar: data.avatar
      });

      await this.usersRepository.save(user);

      const token = sign({id: user.id, isAdmin: user.isAdmin}, `${process.env.KEY_AUTHORIZATION}`, {
         expiresIn: "10m"
      }); 
      
      const object = {
         token,
         avatar: user.avatar
      }

      return object;
   } 
}