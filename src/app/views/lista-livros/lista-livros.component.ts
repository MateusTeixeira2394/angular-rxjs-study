import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Book from '../../model/book.interface';
import Item from '../../model/item.interface';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  public booksList: Book[] = [];

  public campoBusca: string = '';

  public subscription: Subscription;

  constructor(private service: BookService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchBooks() {

    this.subscription = this.service.search(this.campoBusca).subscribe({
      next: result => this.booksList = this.mapToBooks(result),
      error: error => console.log(error),
      complete: () => console.log('books', this.booksList)
    });

  };

  private mapToBooks(items: Item[]): Book[] {

    return items.map<Book>(currItem => new Book(currItem));

  };

};



