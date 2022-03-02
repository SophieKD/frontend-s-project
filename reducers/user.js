export default function (userLoggedIn = {}, action) {
  if (action.type === "SignUp") {
    let firstname = action.userSignedUp.firstname;
    let lastname = action.userSignedUp.lastname;
    let pseudo = action.userSignedUp.pseudo;
    let mobile = action.userSignedUp.mobile;
    let email = action.userSignedUp.email;
    let token = action.userSignedUp.token;

    let newUser = {
      ...userLoggedIn,
      firstname,
      lastname,
      pseudo,
      mobile,
      email,
      token,
    };

    return newUser;
  } else if (action.type === "SignIn") {
    let firstname = action.userSignedIn.firstname;
    let lastname = action.userSignedIn.lastname;
    let pseudo = action.userSignedIn.pseudo;
    let mobile = action.userSignedIn.mobile;
    let email = action.userSignedIn.email;
    let token = action.userSignedIn.token;

    let newUser = {
      ...userLoggedIn,
      firstname,
      lastname,
      pseudo,
      mobile,
      email,
      token,
    };

    return newUser;
  } else if (action.type === "logOut") {
    let newUser = {};
    return newUser;
  } else {
    return userLoggedIn;
  }
}
