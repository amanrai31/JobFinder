import { CandidateDto} from "./candidateDto";
import {PartialType} from "@nestjs/mapped-types";

export class UpdateCandidateDto extends PartialType(CandidateDto) { }