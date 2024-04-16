export type BookDetails = {
    id: string;
    name: string;
    price: string;
    description: string;
    category: string;
  };

export type EventElements = {
    name?: {value: string};
    price?: {value: string};
    category?: {value: string};
    description?: {value: string};
}