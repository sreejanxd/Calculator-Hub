import React, { useState } from "react";
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, Box, IconButton, Typography } from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import ReusableBox from "../ui/Boxs"; 
import Cards from "../ui/Cards";
const timeUnits = {
  Seconds: 1,
  Minutes: 60,
  Hours: 3600,
  Days: 86400,
  Weeks: 604800,
  Months: 2.628e6, // Approximate
  Years: 3.154e7, // Approximate
};

const convertTime = (value, fromUnit, toUnit) => {
  if (isNaN(value) || value === "") return "";
  let seconds = parseFloat(value) * timeUnits[fromUnit];
  return (seconds / timeUnits[toUnit]).toFixed(5);
};

const TimeConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Seconds");
  const [toUnit, setToUnit] = useState("Minutes");
  const [convertedValue, setConvertedValue] = useState("");

  const handleConvert = () => {
    setConvertedValue(convertTime(inputValue, fromUnit, toUnit));
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }} direction={{ xs: "column", md: "row" }}>
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}>
          Time Converter
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        {/* Use the ReusableBox component */}
        <ReusableBox>
          <TextField
            label="Enter Time"
            type="number"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ mb: 2 }}
          />
          
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>From</InputLabel>
                <Select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                  {Object.keys(timeUnits).map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton onClick={swapUnits}>
                <SwapHoriz />
              </IconButton>
            </Grid>

            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>To</InputLabel>
                <Select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                  {Object.keys(timeUnits).map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button variant="contained" fullWidth onClick={handleConvert} sx={{ mt: 2 }}>
            Convert
          </Button>
        </ReusableBox>
      </Grid>

      <Grid item xs={12} md={6}>
        <ReusableBox>
          <Typography variant="h5" textAlign="center" sx={{ fontWeight: "bold" }}>
            Results
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Cards title="Converted Value" value={convertedValue ? `${convertedValue} ${toUnit}` : "-"} />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default TimeConverter;
