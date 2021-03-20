import { User } from "@domain/user/user";
import { UserRepository } from "@domain/user/repository";

export async function UpdateUser(
    user: User,
    userRepository: UserRepository
): Promise<User> {
    try {
        return userRepository.updateUser(user);
    } catch (e) {
        const error = e as Error;
        throw new Error(error.message);
    }
}
