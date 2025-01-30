import React, { useState } from "react";
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, Box, IconButton, Typography } from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import Cards from "../ui/Cards"; // Reusable Card Component
import ReusableBox from "../ui/Boxs"; 

const speedUnits = {
  "Meters per second (m/s)": 1,
  "Kilometers per hour (km/h)": 3.6,
  "Miles per hour (mph)": 2.23694,
  "Feet per second (ft/s)": 3.28084,
  "Knots (kn)": 1.94384,
};

const convertSpeed = (value, fromUnit, toUnit) => {
  if (isNaN(value) || value === "") return "";
  let mpsValue = parseFloat(value) / speedUnits[fromUnit]; // Convert to meters per second
  return (mpsValue * speedUnits[toUnit]).toFixed(5); // Convert to target unit
};

const SpeedConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Kilometers per hour (km/h)");
  const [toUnit, setToUnit] = useState("Miles per hour (mph)");
  const [convertedValue, setConvertedValue] = useState("");

  const handleConvert = () => {
    setConvertedValue(convertSpeed(inputValue, fromUnit, toUnit));
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }} direction={{ xs: "column", md: "row" }}>
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}>
          Speed Converter
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
        {/* Box around Input Fields */}
        <ReusableBox>
          {/* Input Section */}
          <TextField
            label="Enter Speed"
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
                  {Object.keys(speedUnits).map((unit) => (
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
                  {Object.keys(speedUnits).map((unit) => (
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

      {/* Result Section */}
      <Grid item xs={12} md={6}>
        <ReusableBox>
          {/* Heading for Results */}
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

export default SpeedConverter;
