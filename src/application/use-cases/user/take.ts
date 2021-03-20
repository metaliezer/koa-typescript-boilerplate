import { UserRepository } from "@domain/user/repository";
import { User } from "@domain/user/user";

export async function FindUser(
    id: number,
    userRepository: UserRepository
): Promise<User> {
    try {
        const user = await userRepository.findUser(id);
        if (!user) {
            throw new Error(`Нет читателя с id ${id}`);
        }
        return user;
    } catch (e) {
        throw new Error(e);
    }
}
