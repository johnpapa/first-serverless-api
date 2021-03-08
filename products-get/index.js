const data = require('../product-data');
const { format } = require('date-fns');

module.exports = async function (context, req) {
  try {
    const rawProducts = data.getProducts();

    // Format the date
    const products = rawProducts.map((product) => {
      const expires = format(new Date(product.expires), 'yyyy-MM-dd');
      return {
        ...product,
        expires,
      };
    });

    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
