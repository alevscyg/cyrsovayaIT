import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // 3. Создайте пул соединений, используя переменную окружения
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    
    // 4. Создайте адаптер, передав в него пул
    const adapter = new PrismaPg(pool);
    
    // 5. Вызовите super, передав объект с ключом `adapter`
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    // Опционально: завершить работу пула, если приложение закрывается
    // await (this.$adapter as PrismaPg).end();
  }
}