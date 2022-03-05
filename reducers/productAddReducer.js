export default function (productsAdded = {}, action) {
  console.log("productsAdded", productsAdded);
  if (action.type == "addProductToBasket") {
    var productsAddedCopy = [...productsAdded];
    productsAddedCopy.push(action.productAddData);

    return productsAddedCopy;
  } else {
    return productDetails;
  }
}
