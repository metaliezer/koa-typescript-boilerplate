import { Book } from "@domain/book/book";
import { BookRepository } from "@domain/book/repository";

export async function FindBook(
    id: number,
    bookRepository: BookRepository
): Promise<Book> {
    try {
        const book = await bookRepository.findBook(id);
        if (!book) {
            throw `Нет книги с id ${id}`;
        }
        return book;
    } catch (e) {
        throw new Error(e);
    }
}
