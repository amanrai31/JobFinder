import { IsEmail, IsNotEmpty, IsString } from "class-validator";

 export class JobDto{

    @IsString()
    @IsNotEmpty()
    title:string;

    @IsString()
    @IsNotEmpty()
    location:string;

    @IsNotEmpty()
    tags:[];

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
