import { Injectable } from '@nestjs/common';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { UpdateAttendantDto } from './dto/update-attendant.dto';

@Injectable()
export class AttendantsService {
  create(createAttendantDto: CreateAttendantDto) {
    return 'This action adds a new attendant';
  }

  findAll() {
    return `This action returns all attendants`;
  }

  findByName(attendantName: string) {
    return `This action returns a #${attendantName} attendant`;
  }

  update(id: number, updateAttendantDto: UpdateAttendantDto) {
    return `This action updates a #${id} attendant`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendant`;
  }
}
