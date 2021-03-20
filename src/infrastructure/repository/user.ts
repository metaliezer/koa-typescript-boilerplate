import { User } from "@domain/user/user";
import { UserRepository } from "@domain/user/repository";
import { UserModel } from "@infrastructure/orm/typeorm/models/user";
import { getRepository, Repository } from "typeorm";

export class UserRepositoryMysql extends UserRepository {
    private readonly repository: Repository<UserModel> = getRepository(
        UserModel
    );
    constructor() {
        super();
    }

    findUser = async (id: number): Promise<User> => {
        return (await this.repository.findOne({
            where: { id: id },
        })) as User;
    };

    removeUser = async (id: number): Promise<number> => {
        const user = await this.repository.delete(id);
        return user.affected;
    };

    addUser = async (user: User): Promise<User> => {
        return (await this.repository.save(user)) as User;
    };
    updateUser = async (user: User): Promise<User> => {
        return (await this.repository.save(user)) as User;
    };
}
