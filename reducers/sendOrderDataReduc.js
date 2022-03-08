export default function (finalOrder = [], action) {
  console.log("finalOrder", finalOrder);
  if (action.type == "confirmOrder") {
    return [action.orderData];
  } else {
    return finalOrder;
  }
}
