import { book, books} from './fake.database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  findAll() : Object[]{
    return books;
  }

  findOne(id: string) {
    const book = books.find((book: book) => book.id.toString() == id)
    return book 
  }

  update(id: string, newBook: book) : book[] | undefined | object {
    const isExist : book | any = books.find((book: book) => book.id.toString() === id)
    if(!isExist){
      return {
        message : "Malumotlar mavjud emas"
      }
    }
    newBook = {  
      id : newBook.id ?? isExist.id,
     title : newBook.title ?? isExist.title,
     author : newBook.author ?? isExist.author,
     description : newBook.description ?? isExist.description
    }

    const book = books.map((book: book) => {
      if(book.id.toString() === id){
        return newBook
      }else{
        return book
      }
    })

    return book
  }

  remove(id: string) {
    const book = books.filter((book:book) => book.id.toString() !== id)
    return book
  }
}
