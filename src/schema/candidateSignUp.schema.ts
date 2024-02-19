import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ConflictException } from "@nestjs/common";

@Schema()
export class CandidateSignUp{

    @Prop({required:true})
    userName: string;

    @Prop({required:true})
    password: string;

    @Prop({required:true})
    email: string;
}

export const CandidateSignUpSchema = SchemaFactory.createForClass(CandidateSignUp);

CandidateSignUpSchema.pre<CandidateSignUp>('save', async function(next) {
    const candidateSignUp = this;
    const CandidateSignUpModel = this.constructor as any;
    const existingCandidate = await CandidateSignUpModel.findOne({ email: candidateSignUp.email });
    if (existingCandidate) {
      next(new ConflictException('Email already exists, please provide another email'));
    } else {
      next();
    }
  });
