import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"; 

import { JobDto } from './dto/jobDto';
import { UpdateJobDto } from "./dto/updateJobDto";
import { Job } from "src/schema/jobs.schema";
//import { CLIENT_RENEG_LIMIT } from "tls";

@Injectable()
export class JobsService {

  // private jobs: JobDto[];
  // constructor() { this.jobs = [] }               // OR----private jobs: Job[] = [];
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>){}
  //constructor(@InjectModel(collection.name) private yourModel: Model<Collecction>) {}

  getJobs() {
    //return [...this.jobs];  // reference returns, that's why we can't simply return this.jobs
   return this.jobModel.find();
  }

  async createJob(jobs: JobDto) {      // :Promise<Object>
    // console.log(this.jobs)                    
    // this.jobs.push(jobs);
    // return jobs;
    const newjob=  new this.jobModel(jobs);    // only void function can have new keyword- cant apply in seeJobDetails
    return newjob.save();
  }

  async seeJobDetails(id:string){
  const jobDetails=  this.jobModel.findById(id);   
  return jobDetails;
  }
  updateJob(id: string, updatejobdto: UpdateJobDto) {
   const updatedJob= this.jobModel.findByIdAndUpdate(id,updatejobdto);
   return updatedJob;
  }

  deleteJob(id: string) {
    //  this.jobs= this.jobs.filter((job)=> job.jobid!==id);
    //  console.log(this.jobs)
    //  return this.jobs;
    const deletedJob= this.jobModel.findByIdAndDelete(id);
   return deletedJob;
  }


}