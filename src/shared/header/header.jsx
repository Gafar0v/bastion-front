import logo from "../../images/logo.png";
import { Box, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <Box display="flex" justifyContent="flex-start">
      <Tooltip title="Вернуться на главную страницу" arrow>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigation("/", { replace: false })}
          src={logo}
          alt="Logo"
        />
      </Tooltip>
    </Box>
  );
};

export default Header;
