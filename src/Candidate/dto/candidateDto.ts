import { IsNotEmpty, IsString, IsOptional,  } from "class-validator";

export class CandidateDto{

    candidateId:number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    location: string;

    @IsNotEmpty()
    tags:[];
}