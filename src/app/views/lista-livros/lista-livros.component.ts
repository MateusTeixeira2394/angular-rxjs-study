import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap, catchError, throwError, EMPTY } from 'rxjs';
import Book from '../../model/book.interface';
import Item from '../../model/item.interface';
import ResultBook from '../../model/resultBook.interface';
import { BookService } from '../../service/book.service';

const DELAY: number = 1000;

const ERROR_MESSAGE: string = 'Ops, houve algum erro. Recarregue a página.';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  public campoBusca: FormControl<string> = new FormControl();

  public resultBook: ResultBook;

  public booksList: Book[] = [];

  public errorMessage: string = '';

  public foundBooks$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(DELAY),
      filter(typedValue => typedValue.length >= 3),
      tap(() => console.log('fluxo inicial')),
      distinctUntilChanged(),
      switchMap(typedValue => this.service.search(typedValue)),
      tap(() => console.log('requisição ao servidor')),
      map(result => this.resultBook = result),
      map(result => result.items ?? []),
      map(items => this.booksList = this.mapToBooks(items)),
      catchError(error => {
        this.errorMessage = ERROR_MESSAGE;
        return EMPTY;
      })
    );

  constructor(private service: BookService) { }

  private mapToBooks(items: Item[]): Book[] {

    return items.map<Book>(currItem => new Book(currItem));

  };

};



