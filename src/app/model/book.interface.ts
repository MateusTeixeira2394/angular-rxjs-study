import Item from "./item.interface";

export default class Book {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: string;

  constructor({ volumeInfo }: Item) {

    const { title, authors, publisher, publishedDate, description, previewLink, imageLinks } = volumeInfo;

    this.title = title;
    this.authors = authors;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
    this.description = description;
    this.previewLink = previewLink;
    this.thumbnail = imageLinks?.thumbnail;

  };

}
