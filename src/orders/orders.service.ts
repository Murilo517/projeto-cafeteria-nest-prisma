import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dtos/orders.create.dto';
import { OrderStatus } from '@prisma/client';
import { UpdateStatusDto } from './dtos/orders.update.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateOrderDto) {
    return this.prisma.order.create({ data });
  }

  findAll() {
    return this.prisma.order.findMany({
      include: {
        user: true,
        product: true,
      },
    });
  }

  updateStatus(id: number, data: UpdateStatusDto) {
    return this.prisma.order.update({
      where: { id },
      data,
    });
  }

  findByStatus(status: OrderStatus) {
    return this.prisma.order.findMany({
      where: { status },
      include: {
        user: true,
        product: true,
      },
    });
  }
}
