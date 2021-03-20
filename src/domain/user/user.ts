export class User {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly password: string,
        readonly enabled: boolean
    ) {}
}
