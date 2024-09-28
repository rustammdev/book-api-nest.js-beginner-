import { book } from './fake.database';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBoks(){
    return this.bookService.findAll()
  }

  @Get(":id")
  getBook(@Param('id') id: string){
    return this.bookService.findOne(id)
  }

  @Put(':id')
  updateBook(@Param("id") id: string, @Body() newBook: book){
    console.log(newBook)
    return this.bookService.update(id, newBook)
  }

  @Delete(':id')
  removeBook(@Param('id') id: string){
    return this.bookService.remove(id)
  }
}
