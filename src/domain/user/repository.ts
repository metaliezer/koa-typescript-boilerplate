import { User } from "./user";

export abstract class UserRepository {
    abstract findUser = async (id: number): Promise<User> => {
        throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
    abstract removeUser = (id: number): Promise<number> => {
        throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
    abstract addUser = async (book: User): Promise<User> => {
        throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };

    abstract updateUser = async (book: User): Promise<User> => {
        throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
}
