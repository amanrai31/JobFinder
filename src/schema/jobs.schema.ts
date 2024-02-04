import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Job{

    @Prop({required:[true, "Job title required"]})
    title: string;

    @Prop({required:true})
    location:string;

    @Prop({required:true})
    tags:[];

    @Prop({required:true, unique:true})
    email:string;
}
export const JobSchema = SchemaFactory.createForClass(Job);