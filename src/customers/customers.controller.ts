import { Controller, Post, Body, Get, Param, Delete, HttpCode, HttpStatus, Res, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
import { CustomerService } from './customers.service'; // Verifique se o caminho está correto
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({ status: 201, description: 'The customer has been successfully created.', type: Customer })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createCustomerDto: CreateCustomerDto, @Res() res: Response): Promise<Response> {
    try {
      const customer = await this.customerService.create(createCustomerDto);
      return res.status(HttpStatus.CREATED).json(customer);
    } catch (error) {
      throw new InternalServerErrorException('Error creating customer');
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all customers' })
  @ApiResponse({ status: 200, description: 'The customers have been successfully retrieved.', type: [Customer] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(@Res() res: Response): Promise<Response> {
    try {
      const customers = await this.customerService.findAll();
      return res.status(HttpStatus.OK).json(customers);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching customers');
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a customer by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'The ID of the customer to retrieve' })
  @ApiResponse({ status: 200, description: 'The customer has been successfully retrieved.', type: Customer })
  @ApiResponse({ status: 404, description: 'Customer not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findById(@Param('id') id: number, @Res() res: Response): Promise<Response> {
    try {
      const customer = await this.customerService.findById(id);
      return res.status(HttpStatus.OK).json(customer);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching customer by ID');
    }
  }

  @Get('name/:customerName')
  @ApiOperation({ summary: 'Retrieve customers by name' })
  @ApiParam({ name: 'customerName', type: 'string', description: 'The name of the customer to retrieve' })
  @ApiResponse({ status: 200, description: 'Customers with the specified name have been successfully retrieved.', type: [Customer] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findByCustomerName(@Param('customerName') customerName: string, @Res() res: Response): Promise<Response> {
    try {
      const customers = await this.customerService.findByCustomerName(customerName);
      return res.status(HttpStatus.OK).json(customers);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching customers by name');
    }
  }

  @Get('telephone/:telephoneNumber')
  @ApiOperation({ summary: 'Retrieve customers by telephone number' })
  @ApiParam({ name: 'telephoneNumber', type: 'string', description: 'The telephone number of the customer to retrieve' })
  @ApiResponse({ status: 200, description: 'Customers with the specified telephone number have been successfully retrieved.', type: [Customer] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findByTelephoneNumber(@Param('telephoneNumber') telephoneNumber: string, @Res() res: Response): Promise<Response> {
    try {
      const customers = await this.customerService.findByTelephoneNumber(telephoneNumber);
      return res.status(HttpStatus.OK).json(customers);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching customers by telephone number');
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a customer by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'The ID of the customer to delete' })
  @ApiResponse({ status: 200, description: 'The customer has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Customer not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: number, @Res() res: Response): Promise<Response> {
    try {
      await this.customerService.remove(id);
      return res.status(HttpStatus.OK).json({ message: 'Customer deleted successfully' });
    } catch (error) {
      throw new InternalServerErrorException('Error deleting customer');
    }
  }
}
