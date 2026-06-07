import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ResultsService {
    constructor(private databaseService: DatabaseService){}
    
    async createResultOfTest(result: {userid: number, test1: number, test2: number, test3: number, test4: number, test5: number}) {
          return await this.databaseService.usersResult.create({ data: result });
        }
}
