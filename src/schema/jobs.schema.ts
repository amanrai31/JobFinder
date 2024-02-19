import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ConflictException } from "@nestjs/common";
import { Document } from 'mongoose';


@Schema()
export class Job extends Document {

    @Prop({required:[true, "Job title required"]})
    title: string;

    @Prop({required:true})
    location:string;

    @Prop({required:true})
    tags:[];


    @Prop({required:true})
    @Prop({unique:[true,'custom error message: Email must be unique'] })
    email:string;
}
export const JobSchema = SchemaFactory.createForClass(Job);


JobSchema.pre<Job>('save', async function(next) {      // registers a pre-save middleware hook for the save event on the JobSchema
    const job = this;                                 // async function(next) defines an async f/n that takes next as a parameter. next f/n must be called to proceed with the save operation
    const JobModel = this.constructor as any;           // Cast to 'any' to avoid TypeScript error
    const existingJob = await JobModel.findOne({ email: job.email });
    if (existingJob) {
      next(new ConflictException('Email already exists, please provide another email'));
    } else {
      next();
    }
  });