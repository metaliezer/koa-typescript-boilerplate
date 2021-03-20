import { User } from "@domain/user/user";
import { UserRepository } from "@domain/user/user-repository";

export async function UpdateUser(user: User, userRepository: UserRepository) {
    return userRepository.updateUser(user);
}
