import { UserRepository } from "@domain/user/user-repository";

export async function RemoveUser(id: number, userRepository: UserRepository) {
    return userRepository.removeUser(id);
}
