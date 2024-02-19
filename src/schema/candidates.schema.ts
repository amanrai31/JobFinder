import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ConflictException } from "@nestjs/common";
@Schema()
export class Candidate{

    @Prop({required:[true,'Custom error message: Name is required.']})
    name: string;

    @Prop({required:true})
    location:string;

    @Prop({required:true})
    tags:[];

    @Prop({required:true})
    @Prop({unique:[true,'custom error message: Email must be unique'] })
    email: string;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);

CandidateSchema.pre<Candidate>('save', async function(next) {
    const candidate = this;
    const CandidateModel = this.constructor as any;
    const existingCandidate = await CandidateModel.findOne({ email: candidate.email });
    if (existingCandidate) {
      next(new ConflictException('Email already exists, please provide another email'));
    } else {
      next();
    }
  });