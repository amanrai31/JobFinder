import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Job{

    @Prop({required:true})
    JobTitle: string;

    @Prop({required:true})
    jobLocation:string;

    @Prop({required:true})
    tags:[];

    @Prop({required:true, unique:true})
    email:string;
}
export const JobSchema = SchemaFactory.createForClass(Job);