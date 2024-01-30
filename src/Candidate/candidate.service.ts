import { Injectable } from "@nestjs/common";
import {CandidateDto} from './dto/candidateDto';

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Candidate } from "src/schema/candidate.schema";

@Injectable()
export class CandidateService{

    private candidate: CandidateDto[] = [];
    
    constructor(@InjectModel(Candidate.name) private candidateModel: Model<Candidate>){}
    
    async insertCandidate(candidate:CandidateDto){
        this.candidate.push(candidate);
        return candidate;
      }

      getCandidate(){ 
        console.log(this.candidate);
        return[...this.candidate];
      }
      delCandidate(id:number){
        this.candidate=this.candidate.filter((user)=> user.candidateId!==id )
      }
}