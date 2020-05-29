export const formatPrice = (x, currency) => {
    switch (currency) {
      case 'ARG':
        return x.toFixed(2).replace('.', ',');
      default:
        return x.toFixed(2);
    }
  };

//export const productsAPI = "http://localhost:8001/api/products"

export const productsAPI = `https://react-redux-shopping-cart.firebaseio.com/products.json`