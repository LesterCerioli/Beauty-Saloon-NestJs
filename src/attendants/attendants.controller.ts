import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttendantsService } from './attendants.service';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { UpdateAttendantDto } from './dto/update-attendant.dto';

@Controller('attendants')
export class AttendantsController {
  constructor(private readonly attendantsService: AttendantsService) {}

  @Post()
  create(@Body() createAttendantDto: CreateAttendantDto) {
    return this.attendantsService.create(createAttendantDto);
  }

  @Get()
  findAll() {
    return this.attendantsService.findAll();
  }

  @Get(':attendantName')
  findByName(@Param('attendantName') attendantName: string) {
    return this.attendantsService.findByName(attendantName);
  }
  
}
