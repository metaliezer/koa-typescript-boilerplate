import { AddUser } from "@application/use-cases/user/add";
import { FindUser } from "@application/use-cases/user/take";
import { RemoveUser } from "@application/use-cases/user/remove";
import { UpdateUser } from "@application/use-cases/user/update";
import { User } from "@domain/user/user";
import { UserRepositoryMysql } from "@infrastructure/repository/user";
import { Context } from "koa";

interface IGetUserContext extends Context {
    params: {
        id: string;
    };
}

export class UserController {
    findUser = async (ctx: IGetUserContext): Promise<void> => {
        const userId = +ctx.params.id;
        try {
            const finduser = await FindUser(userId, new UserRepositoryMysql());
            ctx.body = finduser as User;
        } catch (e) {
            ctx.throw(404, e);
        }
    };

    removeUser = async (ctx: IGetUserContext): Promise<void> => {
        const userId = +ctx.params.id;
        try {
            const removeuser = await RemoveUser(
                userId,
                new UserRepositoryMysql()
            );
            ctx.body = removeuser;
        } catch (e) {
            ctx.throw(404, e);
        }
    };
    addUser = async (ctx: Context) => {
        const newuserData = <User>ctx.request.body;
        try {
            const newuser = await AddUser(
                newuserData,
                new UserRepositoryMysql()
            );
            ctx.body = newuser;
        } catch (e) {
            const er = e as Error;
            ctx.type = "json";
            ctx.status = 404;
            ctx.body = { error: true, message: er.message };
        }
    };

    updateUser = async (ctx: Context) => {
        const userData = <User>ctx.request.body;
        if (!userData.id) {
            ctx.type = "json";
            ctx.status = 404;
            ctx.body = { error: true, message: "Not found id" };
            return;
        }
        try {
            const newuser = await UpdateUser(
                userData,
                new UserRepositoryMysql()
            );
            ctx.body = newuser;
        } catch (e) {
            const er = e as Error;
            ctx.type = "json";
            ctx.status = 404;
            ctx.body = { error: true, message: er.message };
        }
    };
}
