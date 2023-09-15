import React from "react";
import { Box } from "@mui/material";
import Header from "../../shared/header/header";
import AuthInfo from "../../shared/auth/auth-info/auth-info";
import SignIn from "../../components/sign-in";

const SignInPage = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <AuthInfo actionName="Войти" />
        <SignIn />
      </Box>
    </>
  );
};

export default SignInPage;
