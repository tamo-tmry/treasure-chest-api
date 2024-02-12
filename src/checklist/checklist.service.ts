import { Injectable } from '@nestjs/common';
// import { CreateChecklistDto } from './dto/create-checklist.dto';
// import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Checklist } from './entities/checklist.entity';

@Injectable()
export class ChecklistService {
  constructor(
    @InjectRepository(Checklist)
    private checklistRepository: Repository<Checklist>,
  ) {}

  async create(label: string) {
    const checklist = new Checklist();
    checklist.label = label;
    return await this.checklistRepository.save(checklist);
  }

  async findAll() {
    return await this.checklistRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} checklist`;
  // }

  // update(id: number, updateChecklistDto: UpdateChecklistDto) {
  //   return `This action updates a #${id} checklist`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} checklist`;
  // }
}
