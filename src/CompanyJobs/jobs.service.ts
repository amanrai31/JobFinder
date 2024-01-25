import { Injectable } from "@nestjs/common";

import {Job} from './jobDto';
import { CLIENT_RENEG_LIMIT } from "tls";

@Injectable()
export class JobsService{
private jobs: Job[] = [];

async insertJob(title:string, location:string, jobid:number):Promise<Object>{
    this.jobs.push({jobid:jobid,title:title,location:location});
    console.log(this.jobs);
    return  {
      message:"JOb Posted SUcessfully",
      status:201
    }
  }

  // delJobs(id:number) {
  //   this.jobs = this.jobs.filter((job)=>id !== job.jobid)
  //   return {
  //     message:"Deleted Sucessfully"
  //   }
  // }
  deleteEntryById(id: number): string {
    const index = this.jobs.findIndex(entry => entry.jobid === id);
    if (index !== -1) {
      this.jobs.splice(index, 1);
      return `Entry with ID ${id} deleted successfully`;
    }
    return `Entry with ID ${id} not found`;
  }



  getJobs(){
    console.log(this.jobs)
    return [...this.jobs];                          // reference returns, that's why we can't simply return this.jobs
  }
}