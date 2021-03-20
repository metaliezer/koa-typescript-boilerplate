import { User } from "@domain/user/user";
import { UserRepository } from "@domain/user/user-repository";

export async function AddUser(user: User, userRepository: UserRepository) {
    return userRepository.addUser(user);
}
