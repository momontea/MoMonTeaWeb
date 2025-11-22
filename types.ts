
export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'milk' | 'fruit' | 'special';
  isNew?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface PromoContent {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  backgroundColor: string;
  textColor: string;
  imagePosition: 'left' | 'right';
  // stickerIcon removed
}

// Order System Types

export type ProductFamily = 
  | 'Milk Tea' 
  | 'Choco & Coffee' 
  | 'Tea Tale' 
  | 'Fluffy Shake' 
  | 'Lychee' 
  | 'Qué PALTA' 
  | 'Probiótico' 
  | 'Matcha' 
  | 'Taro' 
  | 'Bubble Love' 
  | 'JugoMix';

export interface Product {
  id: string;
  name: string;
  family: ProductFamily;
  basePrice: number;
  description?: string;
  imageUrl: string;
}

export interface OrderOptions {
  base: string; // "Diversión"
  size: 'Emoción' | 'Ánimo' | 'Inspiración';
  temperature: 'Con hielo' | 'Poco hielo' | 'Sin hielo' | 'Tibio';
  sweetness: 'Normal' | 'Dulcero' | 'Bajo azúcar' | 'FIT (sin azúcar)' | 'Stevia';
  straw: boolean;
  extras: string[]; // "Más diversión"
}

export interface CartItem {
  id: string;
  product: Product;
  options: OrderOptions;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export type PaymentMethod = 'visa' | 'mastercard' | 'yape' | 'plin';
