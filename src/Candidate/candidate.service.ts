import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import {CandidateDto} from './dto/candidateDto';
import { UpdateCandidateDto } from './dto/updateCandidateDto';
import { Candidate } from "src/schema/candidates.schema";

@Injectable()
export class CandidateService{
    
    constructor(@InjectModel(Candidate.name) private candidateModel: Model<Candidate>){}
    
    getCandidates(){ 
      return this.candidateModel.find();
    }

    async createCandidate(candidate:CandidateDto) {
      
        const newCandidate = new this.candidateModel(candidate);
        return newCandidate.save();       //this.candidate.push(candidate); return candidate;

      }

    async updateCandidate(id:string, updateCandidate:UpdateCandidateDto){
     return this.candidateModel.findByIdAndUpdate(id, updateCandidate);
    }

    async getCandidateById(id:string){
        // const candidateProfile= this.candidate.find((cp)=> cp.candidateId===id)
        const candidateProfile= this.candidateModel.findById(id);
        return candidateProfile;
     }

    async deleteCandidate(id:string){
        // this.candidate=this.candidate.filter((user)=> user.candidateId!==id )
        return this.candidateModel.findByIdAndDelete(id);
    }


}