export default function (productDetails = [], action) {
  // console.log("productDetails", productDetails);
  if (action.type == "sendProductDetails") {
    return [action.productData];
  } else {
    return productDetails;
  }
}
