import { Book } from "@domain/book/book";
import { BookRepository } from "@domain/book/book-repository";

export async function AddBook(book: Book, bookRepository: BookRepository) {
    return bookRepository.addBook(book);
}
