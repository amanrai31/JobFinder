import { Controller, Post, Body, Get, Delete, Param, Patch } from "@nestjs/common";                              
import { JobsService } from "./jobs.service";
import { Job } from "./dto/jobDto";

@Controller('/jobFinder/jobs')
export class JobsController{

    constructor(private readonly jobsService: JobsService) {}

    @Get("/get")
    getAllJobs(){
        return this.jobsService.getJobs();
    }

    @Post("/add")
    addJob(@Body() jobDto : Job): any {                                                                                                      // converts JSON to JS object
     return this.jobsService.insertJob(jobDto);
    }

    @Delete('/delete/:id')
    deleteJob(@Param('id')id:string){
     return this.jobsService.deleteJob(+id);
    }

    // @Patch('/updateJob/:id')
    // updateJob(@Param('id')id:string){
    //     return this.jobsService.updateJob(+id);
    // }
  
}