import { BookRepository } from "@domain/book/repository";

export async function RemoveBook(
    id: number,
    bookRepository: BookRepository
): Promise<boolean> {
    try {
        const book = await bookRepository.removeBook(id);
        if (!book) {
            throw new Error(`Нет книги с id ${id}`);
        }
        return true;
    } catch (e) {
        throw new Error(e);
    }
}
