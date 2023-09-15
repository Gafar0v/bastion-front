import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import Header from "../header/header";
import { useSelector } from "react-redux";
import logo from "../../images/logo.png"
import { defaultTheme } from "../../theme"
import MenuIcon from '@mui/icons-material/Menu';

const ClientHeader = () => {
  const { email } = useSelector((state) => state.signIn);
  const { name } = useSelector((state) => state.signUp)

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar
        sx={{
          backgroundColor: "white",
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <Box>
            <img src={logo} alt="Logo"/>
          </Box>
          <Typography textAlign="center" variant="h4" sx={{ flexGrow: 1, color: "black" }}>
            Главная
          </Typography>
            <Button variant="contained" sx={{ marginRight: "5px" }}>
              {email ? email : name}
            </Button>
            <Button
              variant="contained"
            >
              Выйти
            </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default ClientHeader;