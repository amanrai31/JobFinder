import { Controller, Post, Body, Get, Delete, Query} from "@nestjs/common";                              
import { JobsService } from "./jobs.service";
import { Job } from "./jobDto";

@Controller('jobs')
export class JobsController{

    constructor(private readonly jobsService: JobsService) {}

    @Post("add")
    addJob(@Body() jobDto : Job): any {                                                                                                      // converts JSON to JS object
     return this.jobsService.insertJob(jobDto.title,jobDto.location,jobDto.jobid);
    }
    @Get("get")
    getAllJobs(){
        return this.jobsService.getJobs();
    }

    
    @Delete("delete")
    delJobs(@Query("id") id: number) {                                                                                                      // converts JSON to JS object
        return this.jobsService.deleteEntryById(id)                                                                                                               // dought--- 39min
    }
}