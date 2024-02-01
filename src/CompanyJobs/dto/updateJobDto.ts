import { PartialType } from "@nestjs/mapped-types";
import { JobDto } from "./jobDto";

export class UpdateJobDto extends PartialType(JobDto) { }