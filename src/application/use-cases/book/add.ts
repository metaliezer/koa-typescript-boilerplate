import { Book } from "@domain/book/book";
import { BookRepository } from "@domain/book/repository";

export async function AddBook(
    book: Book,
    bookRepository: BookRepository
): Promise<Book> {
    try {
        const newBook = (await bookRepository.addBook(book)) as Book;
        return newBook;
    } catch (e) {
        const error = e as Error;
        throw new Error(error.message);
    }
}
