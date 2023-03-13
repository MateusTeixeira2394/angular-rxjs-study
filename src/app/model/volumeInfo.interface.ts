export default interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  publishedDate: string;
  pageCount: number;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  allowAnonLogging: boolean;
  contentVersion: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  publisher?: string;
  description?: string;
  imageLinks?: ImageLinks;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}




