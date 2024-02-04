import { Module } from "@nestjs/common";

import { CandidateController } from "./candidate.controller";
import { CandidateService } from "./candidate.service";

import { MongooseModule } from "@nestjs/mongoose";
import { Candidate ,CandidateSchema } from "src/schema/candidates.schema";


@Module({
    imports:[MongooseModule.forFeature([
        {name: Candidate.name,
            schema:CandidateSchema,
        },
    ])],
    controllers:[CandidateController],
    providers: [CandidateService],
})

export class CandidateModule{

}