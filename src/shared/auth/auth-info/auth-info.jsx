import { Box, Typography } from "@mui/material";

const TextInfo = ({ actionName }) => {
  return (
    <Box>
      <Typography variant="h3">{actionName}</Typography>
    </Box>
  );
};

export default TextInfo;
