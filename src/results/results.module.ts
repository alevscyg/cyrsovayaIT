import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [ResultsService],
  controllers: [ResultsController],
  imports : [DatabaseModule, JwtModule]
})
export class ResultsModule {}
