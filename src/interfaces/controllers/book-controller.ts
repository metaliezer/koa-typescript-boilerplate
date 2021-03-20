import { AddBook } from "@application/use-cases/book/add-book";
import { FindBook } from "@application/use-cases/book/find-book";
import { RemoveBook } from "@application/use-cases/book/remove-book";
import { UpdateBook } from "@application/use-cases/book/update-book";
import { Book } from "@domain/book/book";
import { BookRepositoryMysql } from "@infrastructure/repository/book-repository-mysql";
import { Context } from "koa";

interface IGetBookContext extends Context {
    params: {
        id: string;
    };
}

export class BookController {
    findBook = async (ctx: IGetBookContext): Promise<void> => {
        const bookId = +ctx.params.id;
        try {
            const findBook = await FindBook(bookId, new BookRepositoryMysql());
            ctx.body = findBook as Book;
        } catch (e) {
            const er = e as Error;
            ctx.type = "json";
            ctx.status = 404;
            ctx.body = { error: true, message: er.message };
        }
    };

    removeBook = async (ctx: IGetBookContext): Promise<void> => {
        const bookId = +ctx.params.id;
        try {
            const removeBook = await RemoveBook(
                bookId,
                new BookRepositoryMysql()
            );
            ctx.body = removeBook;
        } catch (e) {
            ctx.throw(404, e);
        }
    };
    addBook = async (ctx: Context) => {
        const newBookData = <Book>ctx.request.body;
        try {
            const newBook = await AddBook(
                newBookData,
                new BookRepositoryMysql()
            );
            ctx.body = newBook;
        } catch (e) {
            const er = e as Error;
            ctx.type = "json";
            ctx.status = 404;
            ctx.body = { error: true, message: er.message };
        }
    };

    updateBook = async (ctx: Context) => {
        const bookData = <Book>ctx.request.body;
        if (!bookData.id) {
            ctx.type = "json";
            ctx.status = 404;
            ctx.body = { error: true, message: "Not found id" };
            return;
        }
        try {
            const newBook = await UpdateBook(
                bookData,
                new BookRepositoryMysql()
            );
            ctx.body = newBook;
        } catch (e) {
            const er = e as Error;
            ctx.type = "json";
            ctx.status = 404;
            ctx.body = { error: true, message: er.message };
        }
    };
}
