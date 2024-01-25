import { Module } from "@nestjs/common";

import { CandidateController } from "./candidate.controller";
import { CandidateService } from "./candidate.service";
//import { Mongoose } from "@nestjs/mongoose";

@Module({
    controllers:[CandidateController],
    providers: [CandidateService],
})

export class CandidateModule{

}