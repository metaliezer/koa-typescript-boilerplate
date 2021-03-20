import { UserRepository } from "@domain/user/repository";

export async function RemoveUser(
    id: number,
    userRepository: UserRepository
): Promise<boolean> {
    try {
        const user = await userRepository.removeUser(id);
        if (!user) {
            throw new Error(`Нет пользователя с id ${id}`);
        }
        return true;
    } catch (e) {
        throw new Error(e);
    }
}
