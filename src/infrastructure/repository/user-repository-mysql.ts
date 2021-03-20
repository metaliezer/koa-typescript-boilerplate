import { User } from "@domain/user/user";
import { UserRepository } from "@domain/user/user-repository";
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
        try {
            const user = (await this.repository.findOne({
                where: { id: id },
            })) as User;
            if (!user) {
                throw new Error(`Нет читателя с id ${id}`);
            }
            return user;
        } catch (e) {
            throw new Error(e);
        }
    };

    removeUser = async (id: number): Promise<boolean> => {
        try {
            const user = await this.repository.delete(id);
            if (!user.affected) {
                throw new Error(`Нет читателя с id ${id}`);
            }
            return true;
        } catch (e) {
            throw new Error(e);
        }
    };

    addUser = async (user: User): Promise<User> => {
        try {
            const newuser = (await this.repository.save(user)) as User;
            return newuser;
        } catch (e) {
            const error = e as Error;
            throw new Error(error.message);
        }
    };
    updateUser = async (user: User): Promise<User> => {
        try {
            const newUser = (await this.repository.save(user)) as User;
            return newUser;
        } catch (e) {
            const error = e as Error;
            throw new Error(error.message);
        }
    };
}
