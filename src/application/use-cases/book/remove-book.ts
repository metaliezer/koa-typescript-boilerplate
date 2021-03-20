import { BookRepository } from "@domain/book/book-repository";

export async function RemoveBook(id: number, bookRepository: BookRepository) {
    return bookRepository.removeBook(id);
}
