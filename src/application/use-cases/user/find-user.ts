import { UserRepository } from "@domain/user/user-repository";

export async function FindUser(id: number, userRepository: UserRepository) {
    return userRepository.findUser(id);
}
