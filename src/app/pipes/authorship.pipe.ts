import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorship'
})
export class AuthorshipPipe implements PipeTransform {

  transform(authors: string[]): string {

    return authors[0] || '';

  };

};
