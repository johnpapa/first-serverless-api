const data = {
  products: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: 1,
      expires: `7-1-2021`,
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
      expires: `7-1-2021`,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
      expires: `7-1-2021`,
    },
  ],
};

const getProducts = () => {
  return data.products;
};

module.exports = { getProducts };
