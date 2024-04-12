import { Injectable, NotFoundException } from '@nestjs/common';
import { Invoice } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Invoice[]> {
    return this.prisma.invoice.findMany();
  }

  async findOne(id: string): Promise<Invoice> {
    const found = await this.prisma.invoice.findFirst({
      where: {
        id,
      },
    });

    if (!found) {
      throw new NotFoundException('Invoice not found');
    }

    return found;
  }

  async total() {
    const invoices = await this.findAll();
    return invoices.reduce((acc, invoice) => acc + invoice.amount, 0);
  }
}
