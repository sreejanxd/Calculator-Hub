import React from "react";
import { Chip } from "@mui/material";

const Chips = ({ label, onClick, selected }) => {
  return (
    <Chip
      label={label}
      clickable
      onClick={onClick}
      sx={{
        mx: 0.5,
        bgcolor: selected ? "primary.main" : "grey.300",
        color: selected ? "white" : "black",
        "&:hover": { bgcolor: "primary.dark", color: "white" },
      }}
    />
  );
};

export default Chips;
