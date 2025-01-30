import React, { useState } from "react";
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, IconButton, Typography } from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import Cards from "../ui/Cards";
import ReusableBox from "../ui/Boxs"; 
const weightUnits = [
  { label: "Kilograms", value: 1 },
  { label: "Grams", value: 1000 },
  { label: "Milligrams", value: 1e6 },
  { label: "Pounds", value: 2.20462 },
  { label: "Ounces", value: 35.274 },
  { label: "Stones", value: 0.157473 },
];

const WeightConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState(weightUnits[0].value);
  const [toUnit, setToUnit] = useState(weightUnits[1].value);
  const [convertedValue, setConvertedValue] = useState("");

  const convertWeight = () => {
    if (!inputValue) return;
    const result = (inputValue * toUnit) / fromUnit;
    setConvertedValue(result.toFixed(4));
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }} direction={{ xs: "column", md: "row" }}>
      <Grid item xs={12}>
        {/* Heading with Gray Color */}
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}
        >
          Weight Converter
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <ReusableBox>
        {/* Inputs */}
        <TextField
          label="Enter Weight"
          type="number"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel>From</InputLabel>
              <Select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                {weightUnits.map((unit, index) => (
                  <MenuItem key={index} value={unit.value}>
                    {unit.label}
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
                {weightUnits.map((unit, index) => (
                  <MenuItem key={index} value={unit.value}>
                    {unit.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Button variant="contained" fullWidth onClick={convertWeight} sx={{ mt: 2 }}>
          Convert
        </Button>
        </ReusableBox>
      </Grid>

      {/* Results */}
      <Grid item xs={6} md={6}>
        <ReusableBox>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ fontWeight: "bold", color: "#757575" }} // Gray color for results heading
          >
            Results
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Cards title="Converted Value" value={convertedValue ? `${convertedValue}` : "-"} />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default WeightConverter;
