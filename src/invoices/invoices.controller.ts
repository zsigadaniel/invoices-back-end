import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Invoice, User } from '@prisma/client';
import { GetUser } from 'src/auth/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('invoices')
@UseGuards(AuthGuard())
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get('/total')
  total(@GetUser() user: User): Promise<number> {
    return this.invoicesService.total(user.id);
  }

  @Get()
  findAll(@GetUser() user: User): Promise<Invoice[]> {
    return this.invoicesService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user: User): Promise<Invoice> {
    return this.invoicesService.findOne({ id, userId: user.id });
  }
}
