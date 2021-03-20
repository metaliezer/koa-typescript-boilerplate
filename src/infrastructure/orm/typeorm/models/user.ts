import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
@Index("name", ["name"], { unique: true })
export class UserModel {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", {
        name: "name",
        comment: "Пользователь",
        length: 255,
    })
    name: string;

    @Column("smallint", {
        name: "year",
        comment: "Год рождения",
    })
    year: number;

    @Column("varchar", {
        name: "password",
        comment: "Пароль",
        length: 255,
    })
    password: string;

    @Column("tinyint", {
        name: "enabled",
        comment: "Пользователь активирован",
    })
    enabled: boolean;
}
