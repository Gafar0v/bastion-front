import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./loader.css";

const Loader = () => {
  return (
    <div className="blur">
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Loader;
