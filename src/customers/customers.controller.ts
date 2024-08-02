import { Controller, Post, Body, Get, Param, Delete, HttpCode, HttpStatus, Res, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
import { CustomerService } from './customers.service'; // Verifique se o caminho está correto
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto, @Res() res: Response): Promise<Response> {
    try {
      const customer = await this.customerService.create(createCustomerDto);
      return res.status(HttpStatus.CREATED).json(customer);
    } catch (error) {
      throw new InternalServerErrorException('Error creating customer');
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Res() res: Response): Promise<Response> {
    try {
      const customers = await this.customerService.findAll();
      return res.status(HttpStatus.OK).json(customers);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching customers');
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number, @Res() res: Response): Promise<Response> {
    try {
      const customer = await this.customerService.findById(id);
      return res.status(HttpStatus.OK).json(customer);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching customer by ID');
    }
  }

  @Get('name/:customerName')
  async findByCustomerName(@Param('customerName') customerName: string, @Res() res: Response): Promise<Response> {
    try {
      const customers = await this.customerService.findByCustomerName(customerName);
      return res.status(HttpStatus.OK).json(customers);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching customers by name');
    }
  }

  @Get('telephone/:telephoneNumber')
  async findByTelephoneNumber(@Param('telephoneNumber') telephoneNumber: string, @Res() res: Response): Promise<Response> {
    try {
      const customers = await this.customerService.findByTelephoneNumber(telephoneNumber);
      return res.status(HttpStatus.OK).json(customers);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching customers by telephone number');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res: Response): Promise<Response> {
    try {
      await this.customerService.remove(id);
      return res.status(HttpStatus.OK).json({ message: 'Customer deleted successfully' });
    } catch (error) {
      throw new InternalServerErrorException('Error deleting customer');
    }
  }
}
