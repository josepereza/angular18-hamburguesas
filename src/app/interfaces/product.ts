
export interface Product {
    id: number;
    name: string;
    price: number;
    category: 'hamburguesa' | 'bebida' | 'postre' | 'ensalada';
    image: string;
  }