import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ textAlign: "center", py: 2, bgcolor: "#f5f5f5", mt: 3 }}>
      <Typography variant="body2">
        © {currentYear} Made by Oyysreejan.
      </Typography>
    </Box>
  );
};

export default Footer;
