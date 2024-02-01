import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Candidate{

    @Prop({required:[true,'Custom error message: Name is required.']})
    name: string;

    @Prop({required:true})
    location:string;

    @Prop({required:true})
    tags:[];

    @Prop({required:true})
    email: string;
}
export const CandidateSchema = SchemaFactory.createForClass(Candidate);