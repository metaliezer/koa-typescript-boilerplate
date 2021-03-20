import { BookRepository } from "@domain/book/book-repository";

export async function FindBook(id: number, bookRepository: BookRepository) {
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
