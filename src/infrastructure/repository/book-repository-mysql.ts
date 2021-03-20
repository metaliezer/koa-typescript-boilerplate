import { Book } from "@domain/book/book";
import { BookRepository } from "@domain/book/book-repository";
import { BookModel } from "@infrastructure/orm/typeorm/models/book";
import { getRepository, Repository } from "typeorm";

export class BookRepositoryMysql extends BookRepository {
    private readonly repository: Repository<BookModel> = getRepository(
        BookModel
    );
    constructor() {
        super();
    }

    findBook = async (id: number): Promise<Book> => {
        try {
            const book = (await this.repository.findOne({
                where: { id: id },
            })) as Book;
            console.log("book", book);
            return book;
        } catch (e) {
            throw new Error(e);
        }
    };

    removeBook = async (id: number): Promise<boolean> => {
        try {
            const book = await this.repository.delete(id);
            if (!book.affected) {
                throw new Error(`Нет книги с id ${id}`);
            }
            return true;
        } catch (e) {
            throw new Error(e);
        }
    };

    addBook = async (book: Book): Promise<Book> => {
        try {
            const newBook = (await this.repository.save(book)) as Book;
            return newBook;
        } catch (e) {
            const error = e as Error;
            throw new Error(error.message);
        }
    };
    updateBook = async (book: Book): Promise<Book> => {
        try {
            const newBook = (await this.repository.save(book)) as Book;
            return newBook;
        } catch (e) {
            const error = e as Error;
            throw new Error(error.message);
        }
    };
}
