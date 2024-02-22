import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CandidateDto } from './dto/candidateDto';
import { UpdateCandidateDto } from './dto/updateCandidateDto';
import { Candidate } from "src/schema/candidates.schema";

import { CandidateSignUpDto } from './dto/candidateSignUpDto';
import { CandidateSignUp } from 'src/schema/candidateSignUp.schema';
//import { UsersService } from '../users/users.service';

@Injectable()
export class CandidateService {

  constructor(@InjectModel(Candidate.name) private readonly candidateModel: Model<Candidate>) { }

  getCandidates() {
    return this.candidateModel.find();
  }

  async createCandidate(candidate: CandidateDto) {

    const newCandidate = new this.candidateModel(candidate);
    return newCandidate.save();       //this.candidate.push(candidate); return candidate;

  }


  async getCandidateById(id: string) {
    // const candidateProfile= this.candidate.find((cp)=> cp.candidateId===id)
    const candidateProfile = this.candidateModel.findById(id);
    return candidateProfile;
  }

  async updateCandidate(id: string, updateCandidate: UpdateCandidateDto) {
    return this.candidateModel.findByIdAndUpdate(id, updateCandidate);
  }

  async deleteCandidate(id: string) {
    // this.candidate=this.candidate.filter((user)=> user.candidateId!==id )
    return this.candidateModel.findByIdAndDelete(id);
  }

  

}

@Injectable()
export class CandidateAuthService {

  constructor(@InjectModel(CandidateSignUp.name) private candidateSignUpModel: Model<CandidateSignUp>) {}

  async signUp(candidatesignUpDto: CandidateSignUpDto) {
    
    const newCandidate= await this.candidateSignUpModel.create(candidatesignUpDto);
    return newCandidate;

  }

}