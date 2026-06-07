import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
   }),
   DatabaseModule, 
   UsersModule, 
   RoleModule, 
   AuthModule, ResultsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
