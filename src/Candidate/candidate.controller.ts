import { Controller, Post, Body, Get, Delete, Query } from "@nestjs/common";

import { CandidateService  } from "./candidate.service";
import { Candidate } from "./candidateDto";

@Controller('candidate')
export class CandidateController{
 constructor(private readonly candidateService : CandidateService){}

 @Post("add")
 addCandidate(@Body() candidateDto: Candidate): any {
    return this.candidateService.insertCandidate(candidateDto.name,
        candidateDto.location,candidateDto.candidateId);
 }
 @Get("get")
 getAllCandidate(){
    return this.candidateService.getCandidate();
 }
}