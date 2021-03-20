import { User } from "@domain/user/user";
import { UserRepository } from "@domain/user/repository";

export async function AddUser(
    user: User,
    userRepository: UserRepository
): Promise<User> {
    try {
        return userRepository.addUser(user);
    } catch (e) {
        const error = e as Error;
        throw new Error(error.message);
    }
}
