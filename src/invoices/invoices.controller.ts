import { Controller, Get, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Invoice } from '@prisma/client';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get('/total')
  total(): Promise<number> {
    return this.invoicesService.total();
  }

  @Get()
  findAll(): Promise<Invoice[]> {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invoice> {
    return this.invoicesService.findOne(id);
  }
}
