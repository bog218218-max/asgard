export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  sku: string;
  status: 'in_stock' | 'on_order' | 'custom';
  specs: Record<string, string>;
  description: string;
}
