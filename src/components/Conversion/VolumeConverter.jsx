import React, { useState } from "react";
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, IconButton, Typography } from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import Cards from "../ui/Cards"; // Reusable Card Component
import ReusableBox from "../ui/Boxs"; 

const volumeUnits = {
  "Milliliters (mL)": 1,
  "Liters (L)": 1000,
  "Cubic Meters (m³)": 1e6,
  "Cubic Inches (in³)": 16.387,
  "Cubic Feet (ft³)": 28316.8,
  "Cubic Yards (yd³)": 764554,
  "Gallons (US)": 3785.41,
  "Quarts (US)": 946.353,
  "Pints (US)": 473.176,
  "Cups (US)": 240,
  "Tablespoons (US)": 14.7868,
  "Teaspoons (US)": 4.92892,
};

const convertVolume = (value, fromUnit, toUnit) => {
  if (isNaN(value) || value === "") return "";
  let mlValue = parseFloat(value) * volumeUnits[fromUnit];
  return (mlValue / volumeUnits[toUnit]).toFixed(5);
};

const VolumeConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Liters (L)");
  const [toUnit, setToUnit] = useState("Milliliters (mL)");
  const [convertedValue, setConvertedValue] = useState("");

  const handleConvert = () => {
    setConvertedValue(convertVolume(inputValue, fromUnit, toUnit));
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }} direction={{ xs: "column", md: "row" }}>
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}>
          Volume Converter
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
        {/* Box around Input Fields */}
        <ReusableBox>
          {/* Input Section */}
          <TextField
            label="Enter Volume"
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
                  {Object.keys(volumeUnits).map((unit) => (
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
                  {Object.keys(volumeUnits).map((unit) => (
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

export default VolumeConverter;
