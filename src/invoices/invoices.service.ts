import { Injectable, NotFoundException } from '@nestjs/common';
import { Invoice } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async findAll(id: string): Promise<Invoice[]> {
    return this.prisma.invoice.findMany({
      where: {
        userId: id,
      },
    });
  }

  async findOne({
    id,
    userId,
  }: {
    id: string;
    userId: string;
  }): Promise<Invoice> {
    const found = await this.prisma.invoice.findUnique({
      where: {
        id,
        userId,
      },
    });

    if (!found) {
      throw new NotFoundException('Invoice not found');
    }

    return found;
  }

  async total(id: string): Promise<number> {
    const invoices = await this.findAll(id);
    return invoices.reduce((acc, invoice) => acc + invoice.amount, 0);
  }
}
