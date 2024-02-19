import {
   Controller,
   Post,
   Body,
   Get,
   Delete,
   Query,
   Param,
   ValidationPipe,
   ParseIntPipe,
   Patch,
   HttpException,
   Inject,
} from "@nestjs/common";

import { CandidateService } from "./candidate.service";
import { CandidateDto } from "./dto/candidateDto";
import { UpdateCandidateDto } from "./dto/updateCandidateDto";
import mongoose from "mongoose";

import { CandidateAuthService } from "./candidate.service";
import { CandidateSignUpDto } from "./dto/candidateSignUpDto";

@Controller('/jobFinder/candidate')
export class CandidateController {

   private readonly candidateService: CandidateService;
   private readonly candidateAuthService: CandidateAuthService;

   constructor(@Inject(CandidateService) candidateService: CandidateService, @Inject(CandidateAuthService) candidateAuthService: CandidateAuthService) {
      this.candidateService = candidateService;
      this.candidateAuthService = candidateAuthService;
    }

   @Get("/getAll")
   getAllCandidate() {
      return this.candidateService.getCandidates();
   }

   @Post("/createMyProfile")
   addCandidate(@Body(ValidationPipe) candidateDto: CandidateDto): any {
      return this.candidateService.createCandidate(candidateDto);
   }

   @Get("/myProfile/:id")
   async getCandidateById(@Param('id') id: string) {
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) throw new HttpException('CandidateID not valid', 400);
      const fetchedCandidate = await this.candidateService.getCandidateById(id);
      if (!fetchedCandidate) throw new HttpException('Candidate not fund', 404);
      return fetchedCandidate;
   }

   @Patch("/updateMyProfile/:id")
   async updateCandidate(@Param('id') id: string,
      @Body(ValidationPipe) updateCandidate: UpdateCandidateDto) {
      //return this.candidateService.updateCandidate(id, updateCandidate);
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) throw new HttpException('CandidateID not valid', 400);
      const updatedCandidate = await this.candidateService.updateCandidate(id, updateCandidate);
      if (!updatedCandidate) throw new HttpException('Candidate not found', 404);
      return updatedCandidate;
   }


   @Delete('/deleteMyProfile/:id')
   async delete(@Param('id') id: string) {
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) throw new HttpException("CandidateID not valid", 400);
      const deletedCandidate = await this.candidateService.deleteCandidate(id);
      if (!deletedCandidate) throw new HttpException('Candidate not fund', 404);
      return deletedCandidate;
   }

   @Post("/signUp")
   signup(@Body(ValidationPipe)CandidateSignUpDto: CandidateSignUpDto) {
    return this.candidateAuthService.signUp(CandidateSignUpDto);
   }


}

// login details,fetch details from there and add to myProfile(e.g.-username,email,id(except password))
// addMyProfile, deleteMyProfile, myProfile, updateMyProfile, filterJobs 