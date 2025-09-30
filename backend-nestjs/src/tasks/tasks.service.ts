import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  createForUser(userId: string, dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description ?? null,
        completed: false,
        userId,
      },
    });
  }

  findAllForUser(userId: string) {
    return this.prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateForUser(userId: string, id: string, dto: UpdateTaskDto) {
    await this.prisma.task.update({ where: { id }, data: { ...dto } });
    return this.prisma.task.findFirst({ where: { id, userId } });
  }

  async removeForUser(userId: string, id: string) {
    await this.prisma.task.deleteMany({ where: { id, userId } });
    return { deleted: true };
  }
}
