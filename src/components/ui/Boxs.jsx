import React from "react";
import { Box } from "@mui/material";

const Boxs = ({ children }) => {
  return (
    <Box sx={{
      border: "1px solid #ccc",
      borderRadius: 2,
      p: 2,
      backgroundColor: "#f9f9f9",
      height: "300px", // Fixed height
      overflowY: "auto", // Scrollable content if needed
    }}>
      {children}
    </Box>
  );
};

export default Boxs;
