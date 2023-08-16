import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskStatus } from '../Model/task.model';
import { CreateTaskDto } from '../dto/task.dto';

@Injectable()
export class TasksService {
  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) { }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new this.taskModel({
      title,
      description,
    });
    return task.save();
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    return task.save();
  }
  async deleteTask(id: string): Promise<void> {
    const found = await this.getTaskById(id);
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    await this.taskModel.deleteOne({ _id: id }).exec();
  }
  private async getTaskById(id: string): Promise<Task> {
    try {
      const task = await this.taskModel.findById(id).exec();
      if (!task) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      return task;
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
