//create a dummy product api

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "This is the first product",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "This is the second product",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "This is the third product",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    description: "This is the fourth product",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    description: "This is the fifth product",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
export const addProduct = (product) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { id, name, price, description } = product;
      products.push({ id, name, price, description });
      resolve(product);
    }, 1000);
  });
};
