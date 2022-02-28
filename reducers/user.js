export default function (userLoggedIn = {}, action) {
  if (action.type === "SignUp") {
    let firstname = action.userSignedUp.firstname;
    let lastname = action.userSignedUp.lastname;
    let pseudo = action.userSignedUp.pseudo;
    let mobile = action.userSignedUp.mobile;
    let email = action.userSignedUp.email;

    let newUser = {
      ...userLoggedIn,
      firstname,
      lastname,
      pseudo,
      mobile,
      email,
    };

    return newUser;
  } else if (action.type === "logOut") {
    let newUser = {};
    return newUser;
  } else {
    return userLoggedIn;
  }
}
