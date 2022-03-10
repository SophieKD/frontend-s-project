export default function (qty = 0, action) {
  console.log("qty", qty);

  if (action.type == "increaseProductQty") {
    var newQty = qty + 1;

    return newQty;
  } else {
    return qty;
  }
}
