import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class FakeUsersRepository implements IUsersRepository {

    private users: User[] = [];

   async findByEmail(email: string): Promise<User> {
    const user = this.users.find(users => user.email === email);

    return user;
       
   }

   async save(user: User): Promise<void> { 
        this.users.push(user);
        console.log(user) // fake save
   }
}