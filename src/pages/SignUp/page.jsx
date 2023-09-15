import React from "react";
import { Box } from "@mui/material";
import Header from "../../shared/header/header";
import AuthInfo from "../../shared/auth/auth-info/auth-info";
import SignUp from "../../components/sign-up";


const SignUpPage = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <AuthInfo actionName="Регистрация" />
        <SignUp />
      </Box>
    </>
  );
};

export default SignUpPage;
