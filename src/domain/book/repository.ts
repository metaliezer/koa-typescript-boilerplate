import { Book } from "./book";

export abstract class BookRepository {
    abstract findBook = async (id: number): Promise<Book> => {
        throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
    abstract removeBook = (id: number): Promise<number> => {
        throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
    abstract addBook = async (book: Book): Promise<Book> => {
        throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };

    abstract updateBook = async (book: Book): Promise<Book> => {
        throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
}
