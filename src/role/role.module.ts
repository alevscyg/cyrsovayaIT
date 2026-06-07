import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports : [DatabaseModule],
})
export class RoleModule {}
