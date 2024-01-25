import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {jobsModule} from './CompanyJobs/jobs.module';
import {CandidateModule} from './Candidate/candidate.module';
//import { MongooseModule } from '@nestjs/mongoose'; 
@Module({
  imports: [jobsModule,CandidateModule],    // Link modules together, it doesnot import anything
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
