import { IsNotEmpty, IsString, IsOptional, IsEmail, } from "class-validator";

export class CandidateDto{

    // candidateId:number;
    
    @IsString()
    @IsNotEmpty({message: "Name cannot be empty"})
    name: string;

    @IsString()
    location: string;

    @IsNotEmpty({message: "Skills tag cannot be empty"})
    tags:[];

    @IsEmail()
    @IsNotEmpty()
    email: string;
}