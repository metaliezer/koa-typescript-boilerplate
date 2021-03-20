import { AddBook } from "@application/use-cases/book/add";
import { FindBook } from "@application/use-cases/book/find";
import { RemoveBook } from "@application/use-cases/book/remove";
import { UpdateBook } from "@application/use-cases/book/update";
import { Book } from "@domain/book/book";
import { BookRepositoryMysql } from "@infrastructure/repository/book";
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
            ctx.type = "json";
            ctx.body = { remove: removeBook };
        } catch (e) {
            const er = e as Error;
            ctx.type = "json";
            ctx.status = 404;
            ctx.body = { error: true, message: er.message };
        }
    };
    addBook = async (ctx: Context) => {
        const newBookData = <Book>ctx.request.body;
        try {
            const newBook = await AddBook(
                newBookData,
                new BookRepositoryMysql()
            );
            ctx.type = "json";
            ctx.status = 201;
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
