export default function (productsAdded = [], action) {
  // console.log("--action", action);
  // console.log("--productsAdded", productsAdded);
  if (action.type == "addProductToBasket") {
    var productsAddedCopy = [...productsAdded];

    let isAlreadyExist = false;

    for (let i = 0; i < productsAddedCopy.length; i++) {
      if (action.productAddData._id === productsAddedCopy[i]._id) {
        isAlreadyExist = true;
        action.productAddData.qty++;
      }
    }

    if (!isAlreadyExist) {
      action.productAddData.qty = 1;
      productsAddedCopy.push(action.productAddData);
    }

    return productsAddedCopy;
  } else {
    return productsAdded;
  }
}
