export default function (productsAdded = [], action) {
  console.log("productsAdded", productsAdded);
  var qty = 0;
  if (action.type == "addProductToBasket") {
    var newQty = qty + 1;
    var productsAddedCopy = [...productsAdded];

    productsAddedCopy.push(action.productAddData);

    return productsAddedCopy;
  } else {
    return productsAdded;
  }
}
