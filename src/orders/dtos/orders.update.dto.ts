import { IsEnum } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class UpdateStatusDto {
  @IsEnum(OrderStatus, { message: 'Status inválido. Os valores aceitos são: PREPARING, READY, DELIVERED.' })
  status: OrderStatus;
}