
import { Product, ProductFamily } from '../types';

export const FAMILIES: ProductFamily[] = [
  'Milk Tea', 
  'Choco & Coffee', 
  'Tea Tale', 
  'Fluffy Shake', 
  'Lychee', 
  'Qué PALTA', 
  'Probiótico', 
  'Matcha', 
  'Taro', 
  'Bubble Love', 
  'JugoMix'
];

// Helper to generate products with specific images
const createProduct = (
  id: string, 
  name: string, 
  family: ProductFamily, 
  description: string = '', 
  imageUrl: string
): Product => ({
  id,
  name,
  family,
  basePrice: 14.00, // Precio base estimado
  description,
  imageUrl
});

export const MENU_PRODUCTS: Product[] = [
  // 1: MILK TEA BY COMELON (Classic Browns/Creams)
  createProduct('mt-1', 'Comelon', 'Milk Tea', 'La receta original de la casa. Té negro intenso con leche.', 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=800'),
  createProduct('mt-2', 'Tradicional', 'Milk Tea', 'El clásico sabor del té con leche, simple y perfecto.', 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80&w=800'),
  createProduct('mt-3', 'Té Oolong Latte', 'Milk Tea', 'Suave y aromático, con notas florales.', 'https://images.unsplash.com/photo-1633589747989-9a0c2002cc31?auto=format&fit=crop&q=80&w=800'),
  createProduct('mt-4', 'Ying Yang', 'Milk Tea', 'Mezcla equilibrada de té negro y café.', 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800'),
  createProduct('mt-5', 'Perú Milk Tea', 'Milk Tea', 'Exótico y cremoso con toques de lúcuma.', 'https://images.unsplash.com/photo-1582239046905-69a4b8327225?auto=format&fit=crop&q=80&w=800'),

  // 2: Choco & Coffee (Dark/Rich)
  createProduct('cc-1', 'Dryad', 'Choco & Coffee', 'Chocolate intenso para los amantes del cacao.', 'https://images.unsplash.com/photo-1624783694758-352c783b233d?auto=format&fit=crop&q=80&w=800'),
  createProduct('cc-2', 'Milk Chocolate Oreo', 'Choco & Coffee', 'Frozen cremoso con trozos crujientes de galleta.', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800'),
  createProduct('cc-3', 'ChocoMenta', 'Choco & Coffee', 'La frescura de la menta con el dulce del chocolate.', 'https://images.unsplash.com/photo-1600326145359-3a44909d1a39?auto=format&fit=crop&q=80&w=800'),
  createProduct('cc-4', 'Tiramisú', 'Choco & Coffee', 'Tu postre favorito hecho bebida.', 'https://images.unsplash.com/photo-1589948107539-0c3c83294a3d?auto=format&fit=crop&q=80&w=800'),
  
  // 3: Tea Tale (Colorful/Bright/Fruity)
  createProduct('tt-1', 'Locci', 'Tea Tale', 'Té Jazmín con naranja, curacao azul y nube de algodón.', 'https://images.unsplash.com/photo-1589362928312-480823224523?auto=format&fit=crop&q=80&w=800'),
  createProduct('tt-2', 'Ágata', 'Tea Tale', 'Refrescante mezcla de Limón, fresa, mango y soda.', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800'),
  createProduct('tt-3', 'Esmeralda', 'Tea Tale', 'Té verde, manzana verde, lychee y menta.', 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800'),
  createProduct('tt-4', 'Limonada Monster', 'Tea Tale', 'Limonada revitalizante con romero fresco.', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800'),
  createProduct('tt-5', 'Bloodmoon', 'Tea Tale', 'Intenso Té negro, fresa roja, lychee y blueberry.', 'https://images.unsplash.com/photo-1626823726864-92943021e36f?auto=format&fit=crop&q=80&w=800'),

  // 4: Fluffy Shake (Thick Smoothies)
  createProduct('fs-1', 'Wendigo', 'Fluffy Shake', 'Coco, chicle, menta y mucho cream top.', 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&q=80&w=800'),
  createProduct('fs-2', 'Lucumoca', 'Fluffy Shake', 'Lúcuma, cacao, café y fudge. Sabor peruano.', 'https://images.unsplash.com/photo-1589733955941-513b6f8d9b0f?auto=format&fit=crop&q=80&w=800'),
  createProduct('fs-3', 'Banana Split', 'Fluffy Shake', 'Como el postre: Plátano, cacao, fresa y vainilla.', 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=800'),
  createProduct('fs-4', 'Pie de Maracuyá', 'Fluffy Shake', 'Cremoso, ácido y con galleta.', 'https://images.unsplash.com/photo-1632052726704-798b84022df5?auto=format&fit=crop&q=80&w=800'),

  // 5: Lychee (Clear/Pinkish)
  createProduct('ly-1', 'Bosque', 'Lychee', 'Té verde, hierbabuena y menta. Un respiro fresco.', 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800'),
  createProduct('ly-2', 'Sakura', 'Lychee', 'Fresa, sandía y té verde. Sabor a primavera.', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800'),

  // 6: Qué PALTA (Green Smoothies)
  createProduct('qp-1', 'Palta Frutado', 'Qué PALTA', 'Cremoso smoothie de palta con fruta de estación.', 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800'),
  createProduct('qp-2', 'Palta con Chocolate', 'Qué PALTA', 'Inesperadamente delicioso y sedoso.', 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800'),
  createProduct('qp-3', 'Pitufín', 'Qué PALTA', 'Palta, mango y un toque divertido de chicle azul.', 'https://images.unsplash.com/photo-1550399504-8953e1a672cb?auto=format&fit=crop&q=80&w=800'),

  // 7: Probiótico (Healthy/Yogurt style)
  createProduct('pr-1', 'Probiótico Frutado', 'Probiótico', 'Saludable, fresco y lleno de probióticos.', 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'),
  createProduct('pr-2', 'Antioxidante', 'Probiótico', 'Fresa, blueberry, matcha. El boost que necesitas.', 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'),
  createProduct('pr-3', 'GreenDay', 'Probiótico', 'Té verde, limón y menta para desintoxicar.', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800'),

  // 8: Matcha (Green)
  createProduct('ma-1', 'Matcha Latte', 'Matcha', 'Clásico japonés. Matcha auténtico y leche.', 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800'),
  createProduct('ma-2', 'Matcha Oreo', 'Matcha', 'Fusión crunch: Matcha y galleta Oreo.', 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=800'),
  createProduct('ma-3', 'Matcha Tropical', 'Matcha', 'Matcha con piña y naranja. Vibrante.', 'https://images.unsplash.com/photo-1575539657432-c2b43cb0069b?auto=format&fit=crop&q=80&w=800'),
  createProduct('ma-4', 'Matcha Frutado', 'Matcha', 'Energía verde combinada con tu fruta favorita.', 'https://images.unsplash.com/photo-1575539657432-c2b43cb0069b?auto=format&fit=crop&q=80&w=800'), // Added for Highlights

  // 9: Taro (Purple)
  createProduct('ta-1', 'Taro Latte', 'Taro', 'El favorito morado. Dulce, nuez y vainilla.', 'https://images.unsplash.com/photo-1623593688280-a50d5923d32c?auto=format&fit=crop&q=80&w=800'),
  createProduct('ta-2', 'Tarolandia', 'Taro', 'Mango, matcha y taro. Una fiesta de colores.', 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800'),
  createProduct('ta-3', 'Taro Frutado', 'Taro', 'Taro cremoso fusionado con frutas frescas.', 'https://images.unsplash.com/photo-1623593688280-a50d5923d32c?auto=format&fit=crop&q=80&w=800'), // Added for Highlights

  // 10: Bubble Love (Pink/Pastel)
  createProduct('bl-1', 'Bubble Rose', 'Bubble Love', 'Fresa, leche evaporada y amor.', 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=800'),
  createProduct('bl-2', 'Bubble Sky', 'Bubble Love', 'Limón, crema y "nubes" de sabor.', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800'),

  // 11: JugoMix (Fresh Fruit)
  createProduct('jm-1', 'Jugo de 2 frutas', 'JugoMix', 'Fresa y Mango 100% natural.', 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800'),
];

export const BASES = [
  'Estoy bien (Base del té)',
  'Tapioca',
  'Gelatina de coco',
  'SienChao',
  'Pudding',
  'Jucyball'
];

export const EXTRAS = [
  'Tapioca',
  'Gelatina de coco',
  'SienChao',
  'Pudding',
  'Jucyball',
  'Cream Top'
];
