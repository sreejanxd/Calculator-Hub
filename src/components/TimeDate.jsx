import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

const TimeDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long' };
    const day = date.toLocaleDateString('en-US', options);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
    return `${day}, ${formattedDate}`;
  };

  return (
    <Box sx={{ textAlign: "center", p: 2, borderRadius: 2, bgcolor: "#f5f5f5" }}>
      <Typography variant="body2" sx={{ fontSize:'1rem' }}>
        {formatDate(dateTime)}
      </Typography>
      <Typography variant="body1" sx={{ fontSize:'1rem', mt: 1 }}>
        {dateTime.toLocaleTimeString()}
      </Typography>
    </Box>
  );
};

export default TimeDate;