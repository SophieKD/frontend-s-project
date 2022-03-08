import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";
import LocalStorageLogScreen from "../components/Account/LocalStorageLogScreen";
import SignInScreen from "../components/Account/SignInScreen";
import SignUpScreen from "../components/Account/SignUpScreen";
import AccountScreen from "../components/Account/AccountScreen";

function LogScreen(props) {
  const [logComponent, setLogComponent] = useState("signIn");
  const [isUserConfirmed, setIsUserConfirmed] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          setLogComponent("inLocalStorage");
        }
      }
    );
  }, []);

  const goToSignIn = () => {
    AsyncStorage.removeItem("userLocalStorage");
    props.logOutReducer();
    setError({});
    setLogComponent("signIn");
    setIsUserConfirmed(false);
  };

  const goToSignUp = () => {
    AsyncStorage.removeItem("userLocalStorage");
    props.logOutReducer();
    setError({});
    setLogComponent("signUp");
    setIsUserConfirmed(false);
  };

  const goToAccountPage = () => {
    setIsUserConfirmed(true);
  };

  const onPressSignIn = async (email, password) => {
    const data = await fetch(
      "https://ls-project-capsule.herokuapp.com/users/actions/sign-in",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${email}&password=${password}`,
      }
    );

    const response = await data.json();
    console.log("---response =>", response);
    console.log("---userloggedin =>", response.userLoggedIn);

    if (response.result === true) {
      props.onUserSignIn(response.userLoggedIn);
      AsyncStorage.setItem(
        "userLocalStorage",
        JSON.stringify(response.userLoggedIn)
      );
      setLogComponent("inLocalStorage");
      setIsUserConfirmed(true);
    } else {
      setError(response.error);
    }
  };

  const onPressSignUp = async (
    firstname,
    lastname,
    pseudo,
    mobile,
    email,
    password
  ) => {
    const data = await fetch(
      "https://ls-project-capsule.herokuapp.com/users/actions/sign-up",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `firstname=${firstname}&lastname=${lastname}&pseudo=${pseudo}&mobile=${mobile}&email=${email}&password=${password}`,
      }
    );

    const response = await data.json();

    if (response.result === true) {
      props.onUserSignUp(response.userLoggedIn);
      AsyncStorage.setItem(
        "userLocalStorage",
        JSON.stringify(response.userLoggedIn)
      );
      setLogComponent("inLocalStorage");
      setIsUserConfirmed(true);
    } else {
      setError(response.error);
    }

    //Par la suite cette fonction enverra un lien vers:
    //  Si commande en cours = page relative à la commande
    //  Si pas de commande en cours = page du profil
  };

  if (logComponent === "inLocalStorage" && isUserConfirmed === false) {
    loginJSX = (
      <LocalStorageLogScreen
        goToSignInParent={goToSignIn}
        goToSignUpParent={goToSignUp}
        goToAccountParent={goToAccountPage}
      />
    );
  }

  if (logComponent === "inLocalStorage" && isUserConfirmed === true) {
    loginJSX = <AccountScreen goToSignInParent={goToSignIn} />;
  }

  if (logComponent === "signIn") {
    loginJSX = (
      <SignInScreen
        goToSignUpParent={goToSignUp}
        onPressSignInParent={onPressSignIn}
        error={error}
      />
    );
  }

  let loginJSX;
  if (logComponent === "signUp") {
    loginJSX = (
      <SignUpScreen
        goToSignInParent={goToSignIn}
        onPressSignUpParent={onPressSignUp}
        error={error}
      />
    );
  }

  if (isUserConfirmed) {
    return;
    <ScrollView>{loginJSX}</ScrollView>;
  } else {
    return <View style={styles.container}>{loginJSX}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 25,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onUserSignUp: function (userSignedUp) {
      dispatch({ type: "SignUp", userSignedUp });
    },
    onUserSignIn: function (userSignedIn) {
      dispatch({ type: "SignIn", userSignedIn });
    },
    logOutReducer: function () {
      dispatch({ type: "logOut" });
    },
  };
}

export default connect(null, mapDispatchToProps)(LogScreen);
