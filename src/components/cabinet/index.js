import { useSelector } from "react-redux";
import Header from "../../shared/header/header";
import { Box, Typography } from "@mui/material";
import ClientHeader from "../../shared/client-header/client-header";

const Cabinet = () => {
  const { name, surname, email, password, verifyPassword, isMatchPasswords } =
    useSelector((state) => state.signUp);
  return (
    <Box>
      <Box>
        <ClientHeader />
      </Box>
      <Box>
        <Typography variant="h2">
          Добрый день, {name}!
        </Typography>
        <Typography>
          Статус заявки: <Typography>Очное собеседование</Typography>
        </Typography>
      </Box>
    </Box>
  )
}

export default Cabinet;