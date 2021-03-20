import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
@Index("name_author", ["name", "author"], { unique: true })
export class BookModel {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", {
        name: "name",
        comment: "Название книги",
        length: 255,
    })
    name: string;

    @Column("varchar", {
        name: "author",
        comment: "Автор книги",
        length: 255,
    })
    author: string;

    @Column("smallint", {
        name: "year",
        comment: "Год издания книги",
    })
    year: number;

    @Column("smallint", {
        name: "numberOfPages",
        comment: "Год издания книги",
    })
    numberOfPages: number;
}
