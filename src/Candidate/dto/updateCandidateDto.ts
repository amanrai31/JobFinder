import { CandidateDto} from "./candidateDto";
import {PartialType} from "@nestjs/mapped-types";
import { OmitType } from "@nestjs/mapped-types";

export class UpdateCandidateDto extends PartialType (OmitType(CandidateDto, ['email'] as const)) { }

// export class UpdateCandidateDto extends PartialType(CandidateDto) {}