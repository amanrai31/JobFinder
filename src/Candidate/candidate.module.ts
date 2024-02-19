import { Module } from "@nestjs/common";

import { CandidateController } from "./candidate.controller";
import { CandidateAuthService, CandidateService } from "./candidate.service";

import { MongooseModule } from "@nestjs/mongoose";
import { Candidate ,CandidateSchema } from "src/schema/candidates.schema";
import { CandidateSignUp,CandidateSignUpSchema } from "src/schema/candidateSignUp.schema";


@Module({
    imports:[MongooseModule.forFeature([
        {name: Candidate.name,
            schema:CandidateSchema,
        },
    ]), MongooseModule.forFeature([
        {name: CandidateSignUp.name,
            schema:CandidateSignUpSchema,
        },
    ])],
    controllers:[CandidateController],
    providers: [CandidateService,CandidateAuthService],
})

export class CandidateModule{

}