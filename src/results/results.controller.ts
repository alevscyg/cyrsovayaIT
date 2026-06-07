import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ResultsService } from './results.service';
import { JwtAuthguard } from 'src/auth/jwt-auth-guard';

@Controller('results')
export class ResultsController {
    constructor(private readonly resultsService: ResultsService) {}

    @UseGuards(JwtAuthguard)
    @Post()
    async createResultOfTest(@Body() result: {userid: number, test1: number, test2: number, test3: number, test4: number, test5: number}) {
          return await this.resultsService.createResultOfTest(result);
    }

}
