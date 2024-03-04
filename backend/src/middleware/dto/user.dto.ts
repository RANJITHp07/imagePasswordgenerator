import { IsString, IsEmail, MinLength } from 'class-validator';

export class SignUpDTO {
    @IsString()
    username: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsEmail()
    email: string;

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}