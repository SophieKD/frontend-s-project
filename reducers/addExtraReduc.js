export default function (productExtraDetails = [], action) {
  // console.log("productExtraDetails", productExtraDetails);
  console.log("action productExtraDetails", action);
  if (action.type == "sendProductExtra") {
    let isAlreadyExist = false;

    if (productExtraDetails.length >= 1) {
      console.log("productExtraDetails.length >= 1");
      isAlreadyExist = true;
      const extraCopy = [...productExtraDetails];
      extraCopy[0].qty++;
      return extraCopy;
    }

    if (!isAlreadyExist) {
      console.log("!isAlreadyExist");
      action.productExtra.qty = 1;
      return [action.productExtra];
    }
  } else if (action.type === "resetExtra") {
    return [];
  } else {
    return productExtraDetails;
  }
}
