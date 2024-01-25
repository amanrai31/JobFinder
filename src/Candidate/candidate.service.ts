import { Injectable } from "@nestjs/common";
import {Candidate} from './candidateDto';

@Injectable()
export class CandidateService{

    private candidate: Candidate[] = [];

    async insertCandidate(name:string, location:string, candidateId:number):Promise<Object>{
        this.candidate.push({candidateId:candidateId,name:name,location:location});
        console.log(this.candidate);
        return  {
          message:"Candidate profile added SUcessfully",
          status:201
        }
      }
      getCandidate(){
        console.log(this.candidate);
        return[...this.candidate];
        
      }
      delCandidate(candidateId:number){
        
      }
}