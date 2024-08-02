import { Controller, Get, Post, Body, Param, Res, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
import { AttendantsService } from './attendants.service';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { UpdateAttendantDto } from './dto/update-attendant.dto';

@Controller('attendants')
export class AttendantsController {
  constructor(private readonly attendantsService: AttendantsService) {}

  @Post()
  async create(@Body() createAttendantDto: CreateAttendantDto, @Res() res: Response): Promise<Response> {
    try {
      const attendant = await this.attendantsService.create(createAttendantDto);
      return res.status(HttpStatus.CREATED).json(attendant);
    } catch (error) {
      throw new InternalServerErrorException('Error creating attendant');
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    try {
      const attendants = await this.attendantsService.findAll();
      return res.status(HttpStatus.OK).json(attendants);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching attendants');
    }
  }

  @Get(':attendantName')
  async findByName(@Param('attendantName') attendantName: string, @Res() res: Response): Promise<Response> {
    try {
      const attendants = await this.attendantsService.findByName(attendantName);
      return res.status(HttpStatus.OK).json(attendants);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching attendant by name');
    }
  }
}
