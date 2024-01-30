import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Candidate{

    @Prop({required:[true,'Custom error message: Name is required.']})
    candidateName: string;

    @Prop({required:true})
    candidateLocation:string;

    @Prop({required:true})
    skills:[];
}
export const CandidateSchema = SchemaFactory.createForClass(Candidate);