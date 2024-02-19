import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CandidateSignUpDto {

    @IsString()
    @IsNotEmpty()
    userName: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsEmail()
    email: string;

  }