import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";
import LocalStorageLogScreen from "../components/Account/LocalStorageLogScreen";
import SignInScreen from "../components/Account/SignInScreen";
import SignUpScreen from "../components/Account/SignUpScreen";

function LogScreen(props) {
  const [logComponent, setLogComponent] = useState("signIn");
  const [pseudo, setPseudo] = useState("");

  const [error, setError] = useState({});

  useEffect(() => {
    AsyncStorage.getItem(
      "userLocalStorage",
      function (error, userInLocalStorage) {
        if (userInLocalStorage) {
          let userInLocalStorageParsed = JSON.parse(userInLocalStorage);
          let pseudoOfUserInLocalStorage = userInLocalStorageParsed.pseudo;
          setPseudo(pseudoOfUserInLocalStorage);
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
  };

  const goToSignUp = () => {
    AsyncStorage.removeItem("userLocalStorage");
    props.logOutReducer();
    setError({});
    setLogComponent("signUp");
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

    if (response.result === true) {
      props.onUserSignIn(response.userLoggedIn);
      AsyncStorage.setItem(
        "userLocalStorage",
        JSON.stringify(response.userLoggedIn)
      );
      setLogComponent("inLocalStorage");
      setPseudo(response.userLoggedIn.pseudo);
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
      setPseudo(response.userLoggedIn.pseudo);
    } else {
      setError(response.error);
    }

    //Par la suite cette fonction enverra un lien vers:
    //  Si commande en cours = page relative à la commande
    //  Si pas de commande en cours = page du profil
  };

  if (logComponent === "inLocalStorage") {
    loginJSX = (
      <LocalStorageLogScreen
        goToSignInParent={goToSignIn}
        goToSignUpParent={goToSignUp}
      />
    );
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

  return <View style={{ flex: 1 }}>{loginJSX}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
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
