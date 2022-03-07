export default function (productExtraDetails = [], action) {
  console.log("productExtraDetails", productExtraDetails);
  if (action.type == "sendProductExtra") {
    return [action.productExtra];
  } else {
    return productExtraDetails;
  }
}
