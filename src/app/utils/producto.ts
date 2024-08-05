export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
  }
  
  let products: Product[] = [
    { id: 1, name: 'Laptop', description: 'High performance laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Smartphone', description: 'Latest model smartphone', price: 699.99, category: 'Electronics' },
    { id: 3, name: 'Desk Chair', description: 'Ergonomic office chair', price: 149.99, category: 'Furniture' },
    { id: 4, name: 'Coffee Maker', description: 'Single-serve coffee maker', price: 89.99, category: 'Appliances' },
  ];
  
  export const getProducts = () => products;
  
  export const addProduct = (product: Product) => {
    products = [...products, product];
  };
  
  export const updateProduct = (updatedProduct: Product) => {
    products = products.map(product => (product.id === updatedProduct.id ? updatedProduct : product));
  };
  
  export const deleteProduct = (id: number) => {
    products = products.filter(product => product.id !== id);
  };
  
