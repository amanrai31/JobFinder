import { Injectable } from "@nestjs/common";
import {JobDto} from './dto/jobDto';
import { UpdateJobDto } from "./dto/updateJobDto";
//import { CLIENT_RENEG_LIMIT } from "tls";

import { JobSchema } from "src/schema/jobs.schema";

@Injectable()
export class JobsService{

private jobs: JobDto[];                
constructor(){ this.jobs=[]}               // OR----private jobs: Job[] = [];

getJobs(){
  console.log(this.jobs)
  return [...this.jobs];                          // reference returns, that's why we can't simply return this.jobs
}

async insertJob(jobs:JobDto){   
  console.log(this.jobs)                    // :Promise<Object>
    this.jobs.push(jobs);
    return jobs;
  }

  deleteJob(id:number){
  //  this.jobs= this.jobs.filter((job)=> job.jobid!==id);
  //  console.log(this.jobs)
  //  return this.jobs;
  }

  updateJob(id:string){
  
  }
}