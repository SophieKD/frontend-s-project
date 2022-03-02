export default function (stateOfUserLog = "signUp", action) {
  if (action.type === "signIn") {
    return action.type;
  } else {
    return stateOfUserLog;
  }
}
