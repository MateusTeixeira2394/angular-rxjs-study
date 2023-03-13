import Item from "./item.interface";

export default interface ResultBook {
  items: Item[];
  totalItems: number;
  kind: string;
}
