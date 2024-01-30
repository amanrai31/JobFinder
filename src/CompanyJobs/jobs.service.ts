import { Injectable } from "@nestjs/common";

import {Job} from './dto/jobDto';
import { CLIENT_RENEG_LIMIT } from "tls";

@Injectable()
export class JobsService{

private jobs: Job[];                 // private jobs: Job[] = [];

constructor()
{
  this.jobs=[]
}

getJobs(){
  console.log(this.jobs)
  return [...this.jobs];                          // reference returns, that's why we can't simply return this.jobs
}

async insertJob(jobs:Job){   
  console.log(this.jobs)                    // :Promise<Object>
    this.jobs.push(jobs);
    return jobs;
  }

  deleteJob(id:number){
   this.jobs= this.jobs.filter((job)=> job.jobid!==id);
   console.log(this.jobs)
   return this.jobs;
  }

//   updateJob(id:number){

//   }
}