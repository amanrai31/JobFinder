import { Controller, Post, Body, Get, Delete, Query, Param, ValidationPipe, ParseIntPipe } from "@nestjs/common";
import { CandidateService  } from "./candidate.service";
import { CandidateDto } from "./dto/candidateDto";

@Controller('/jobFinder/candidate')
export class CandidateController{

 constructor(private readonly candidateService : CandidateService){}

 @Get("/get")
 getAllCandidate(){
    return this.candidateService.getCandidate();
 }

 @Post("/add")
 addCandidate(@Body(ValidationPipe) candidateDto: CandidateDto): any {
    return this.candidateService.insertCandidate(candidateDto);
 }
 @Delete('/delete/:id')
 delete(@Param('id')id:string){
   this.candidateService.delCandidate(+id);
}
 
}