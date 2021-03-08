const data = require('../product-data');
const { format } = require('date-fns');

module.exports = async function (context, req) {
  try {
    const products = data.getProducts();

    // Format the dates
    products.forEach((product) => {
      product.expires = format(new Date(product.expires), 'yyyy-MM-dd');
    });

    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
