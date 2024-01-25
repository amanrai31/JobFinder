import { Module } from "@nestjs/common";

import {JobsController} from './jobs.controller';
import { JobsService } from "./jobs.service";
//import { Candidate } from "src/Candidate/candidateDto";

@Module({
    controllers: [JobsController],
    providers: [JobsService],
})

export class jobsModule{

}