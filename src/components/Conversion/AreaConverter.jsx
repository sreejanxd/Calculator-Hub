
import React, { useState } from "react";
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, Box, IconButton, Typography } from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import Cards from "../ui/Cards"; // Reusable Card Component
import ReusableBox from "../ui/Boxs"; 

const areaUnits = {
  "Square Meter (m²)": 1,
  "Square Kilometer (km²)": 1e-6,
  "Square Centimeter (cm²)": 10000,
  "Square Millimeter (mm²)": 1e6,
  "Square Inch (in²)": 1550.0031,
  "Square Foot (ft²)": 10.7639,
  "Square Yard (yd²)": 1.19599,
  "Acre": 0.000247105,
  "Hectare (ha)": 0.0001,
};

const convertArea = (value, fromUnit, toUnit) => {
  if (isNaN(value) || value === "") return "";
  let meterValue = parseFloat(value) / areaUnits[fromUnit]; // Convert to square meters
  return (meterValue * areaUnits[toUnit]).toFixed(5); // Convert to target unit
};

const AreaConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Square Meter (m²)");
  const [toUnit, setToUnit] = useState("Square Foot (ft²)");
  const [convertedValue, setConvertedValue] = useState("");

  const handleConvert = () => {
    setConvertedValue(convertArea(inputValue, fromUnit, toUnit));
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }} direction={{ xs: "column", md: "row" }}>
      {/* Heading for the Area Converter */}
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}>
          Area Converter
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
        {/* Box around Input Fields */}
        <ReusableBox>
          {/* Input Section */}
          <TextField
            label="Enter Area"
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
                  {Object.keys(areaUnits).map((unit) => (
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
                  {Object.keys(areaUnits).map((unit) => (
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

export default AreaConverter;
