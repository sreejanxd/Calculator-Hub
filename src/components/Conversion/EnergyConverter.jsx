import React, { useState } from "react";
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, Box, IconButton, Typography } from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import Cards from "../ui/Cards";
import ReusableBox from "../ui/Boxs"; 


const energyUnits = {
  "Joule (J)": 1,
  "Kilojoule (kJ)": 0.001,
  "Calorie (cal)": 0.239006,
  "Kilocalorie (kcal)": 0.000239006,
  "Watt-hour (Wh)": 0.000277778,
  "Kilowatt-hour (kWh)": 2.7778e-7,
  "Electronvolt (eV)": 6.242e+18,
  "British Thermal Unit (BTU)": 0.000947817,
  "Foot-pound (ft-lb)": 0.737562,
};

const convertEnergy = (value, fromUnit, toUnit) => {
  if (isNaN(value) || value === "") return "";
  let joules = parseFloat(value) / energyUnits[fromUnit]; // Convert to Joules
  return (joules * energyUnits[toUnit]).toFixed(5); // Convert to target unit
};

const EnergyConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Joule (J)");
  const [toUnit, setToUnit] = useState("Kilojoule (kJ)");
  const [convertedValue, setConvertedValue] = useState("");

  const handleConvert = () => {
    setConvertedValue(convertEnergy(inputValue, fromUnit, toUnit));
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }} direction={{ xs: "column", md: "row" }}>
      {/* Heading for the Energy Converter */}
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}>
          Energy Converter
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
        {/* Box around Input Fields */}
        <ReusableBox>
          {/* Input Section */}
          <TextField
            label="Enter Energy"
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
                  {Object.keys(energyUnits).map((unit) => (
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
                  {Object.keys(energyUnits).map((unit) => (
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

export default EnergyConverter;
