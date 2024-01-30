import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Job{

    @Prop({required:true})
    JobTitle: string;

    @Prop({required:true})
    jobLocation:string;

    @Prop({required:true})
    skillsNeed:[];
}
export const JobSchema = SchemaFactory.createForClass(Job);