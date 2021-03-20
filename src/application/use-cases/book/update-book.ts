import { Book } from "@domain/book/book";
import { BookRepository } from "@domain/book/book-repository";

export async function UpdateBook(book: Book, bookRepository: BookRepository) {
    return bookRepository.updateBook(book);
}
