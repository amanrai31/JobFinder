import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JobsModule } from './CompanyJobs/jobs.module';
import { CandidateModule } from './Candidate/candidate.module';

import { MongooseModule } from '@nestjs/mongoose';
import { MatchModule } from './match/match.module';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/JobFinder'),
    JobsModule,
    CandidateModule,
    MatchModule,
    AuthModule,
  ], // Link modules together, it doesnot import anything

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
