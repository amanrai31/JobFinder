import { Controller, 
    Post, 
    Body, 
    Get, 
    Delete, 
    Param, 
    Patch, 
    HttpException,
    ParseIntPipe,
    ValidationPipe
} from "@nestjs/common";                              
import { JobsService } from "./jobs.service";
import { JobDto } from "./dto/jobDto";
import { UpdateJobDto } from "./dto/updateJobDto";
import mongoose from "mongoose";


@Controller('/jobFinder')
export class JobsController{

    constructor(private readonly jobsService: JobsService) {}

    @Get("/getAllJobs")
    getAllJobs(){
        return this.jobsService.getJobs();
    }

    @Post("/createJob")
    addJob(@Body() jobDto : JobDto): any {                                                                                                      // converts JSON to JS object
     return this.jobsService.createJob(jobDto);
    }

    @Get("/seeJobDetails/:id")
    async seeJobDetails(@Param("id")id:string){

     const isValid = mongoose.isValidObjectId(id)
     if(!isValid) throw new HttpException('Job ID Invalid', 400);
     const fetchedJob= this.jobsService.seeJobDetails(id);
     if(!fetchedJob) throw new HttpException('Job ID not found', 404);
     return fetchedJob;
    }
    
    @Patch('/updateJob/:id')
    async updateJob(@Param('id')id:string,@Body(ValidationPipe)updatejobdto: UpdateJobDto){
        //return this.jobsService.updateJob(id);
     const isValid = mongoose.isValidObjectId(id)
     if(!isValid) throw new HttpException('Job ID Invalid', 400);
     const updatedJob= this.jobsService.updateJob(id,updatejobdto);
     if(!updatedJob) throw new HttpException('Job ID not found', 404);
     return updatedJob;
    }

    @Delete('/deleteJob/:id')
    async deleteJob(@Param('id')id:string){
     // return this.jobsService.deleteJob(+id);
     const isValid = mongoose.isValidObjectId(id)
     if(!isValid) throw new HttpException('Job ID Invalid', 400);
     const deletedJob= this.jobsService.deleteJob(id);
     if(!deletedJob) throw new HttpException('Job ID not found', 404);
     return deletedJob;
    }

    // JobProvider login, Auth
    // addJob, deleteJob, updateJob, seeJobAdmin, 
}