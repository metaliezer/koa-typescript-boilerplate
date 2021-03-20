import { Book } from "@domain/book/book";
import { BookRepository } from "@domain/book/repository";

export async function UpdateBook(book: Book, bookRepository: BookRepository) {
    try {
        const newBook = await bookRepository.updateBook(book);
        return newBook;
    } catch (e) {
        const error = e as Error;
        throw new Error(error.message);
    }
}
