export class LoginDto {
    username: string;
    password: string;

    constructor(u: string, p: string) {
        this.username = u;
        this.password = p;
    }
}
