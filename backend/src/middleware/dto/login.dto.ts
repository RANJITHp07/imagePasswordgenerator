import { IsString, MinLength } from 'class-validator';

export class LoginDTO {
    @IsString()
    username: string;

    @IsString()
    @MinLength(6)
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}