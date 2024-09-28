import { books} from './fake.database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  findAll() : Object[]{
    return books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
