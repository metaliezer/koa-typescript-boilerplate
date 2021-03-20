export class Book {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly year: number,
        readonly numberOfPages: number
    ) {}
}
