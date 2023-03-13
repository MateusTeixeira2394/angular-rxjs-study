import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorship'
})
export class AuthorshipPipe implements PipeTransform {

  transform(authors: string[]): string {

    if(!authors) return '';

    return authors[0] || '';

  };

};
