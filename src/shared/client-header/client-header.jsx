import {
  AppBar,
  Box,
  IconButton,
  ThemeProvider,
  Toolbar, Tooltip,
  Typography
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/logo.png";
import { defaultTheme } from "../../theme";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import { logout } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../redux/features/user/userSlice";

const ClientHeader = ({ title }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const fullNameJSON = localStorage.getItem("fullName");
  const { name, surname } = fullNameJSON ? JSON.parse(fullNameJSON) : { name: "", surname: "" };

  const userInfoJSON = localStorage.getItem("userInfo");
  const role = userInfoJSON ? JSON.parse(userInfoJSON).role : "";


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "white", boxShadow: "none" }} position="static">
          <Toolbar>
            <Tooltip title="Главная" arrow>

              <img src={logo} alt="Logo" width={200} height={100}
                   onClick={() => navigator("/cabinet", { replace: false })} style={{ cursor: "pointer" }} />
            </Tooltip>
            <Typography textAlign="center" color="black" variant="h4" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <div>
              <Tooltip title="Мой профиль" arrow>
                <IconButton
                  size="large"
                  onClick={() => navigator("/profile", { replace: false })}
                >
                  <Typography mr={1}>{`${name} ${surname}`}</Typography>
                  <AccountCircle />
                </IconButton>
              </Tooltip>

              {
                role === "ADMIN" &&
                <Tooltip title="Список кандидатов" arrow>
                  <IconButton
                    onClick={() => {
                      navigator("/candidat", { replace: false });
                    }}
                    size="large"
                  >
                    <GroupIcon />
                  </IconButton>
                </Tooltip>
              }

              <Tooltip title="Выйти" arrow>
                <IconButton
                  onClick={() => {
                    dispatch(logoutUser());
                    navigator("/", { replace: false });
                  }}
                  size="large"
                >
                  <ExitToAppIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default ClientHeader;