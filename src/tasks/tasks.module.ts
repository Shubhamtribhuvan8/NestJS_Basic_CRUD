import { Module } from '@nestjs/common';
import { TasksController } from './Controller/tasks.controller';
import { TasksService } from './Service/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
