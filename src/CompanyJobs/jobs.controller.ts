import { Controller, 
    Post, 
    Body, 
    Get, 
    Delete, 
    Param, 
    Patch 
} from "@nestjs/common";                              
import { JobsService } from "./jobs.service";
import { JobDto } from "./dto/jobDto";

@Controller('/jobFinder/jobs')
export class JobsController{

    constructor(private readonly jobsService: JobsService) {}

    @Get("/get")
    getAllJobs(){
        return this.jobsService.getJobs();
    }

    @Post("/addJob")
    addJob(@Body() jobDto : JobDto): any {                                                                                                      // converts JSON to JS object
     return this.jobsService.insertJob(jobDto);
    }

    @Delete('/deleteJob/:id')
    deleteJob(@Param('id')id:string){
     return this.jobsService.deleteJob(+id);
    }

    @Patch('/updateJob/:id')
    updateJob(@Param('id')id:string){
        return this.jobsService.updateJob(id);
    }
  

    // JobProvider login, Auth
    // addJob, deleteJob, updateJob, seeJobAdmin, 
}