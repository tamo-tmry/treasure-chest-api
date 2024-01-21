import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChecklistModule } from './checklist/checklist.module';

@Module({
  imports: [ChecklistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
