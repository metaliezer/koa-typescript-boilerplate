import { Book } from "@domain/book/book";
import { BookRepository } from "@domain/book/repository";
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
        return (await this.repository.findOne({
            where: { id: id },
        })) as Book;
    };

    removeBook = async (id: number): Promise<number> => {
        const book = await this.repository.delete(id);
        return book.affected;
    };

    addBook = async (book: Book): Promise<Book> => {
        return (await this.repository.save(book)) as Book;
    };

    updateBook = async (book: Book): Promise<Book> => {
        return (await this.repository.save(book)) as Book;
    };
}
