import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Box,
  Typography,
  IconButton
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Cards from "../ui/Cards"; 
import ReusableBox from "../ui/Boxs"; 
const lengthUnits = [
  { label: "Meters", value: 1 },
  { label: "Kilometers", value: 0.001 },
  { label: "Centimeters", value: 100 },
  { label: "Millimeters", value: 1000 },
  { label: "Inches", value: 39.3701 },
  { label: "Feet", value: 3.28084 },
  { label: "Yards", value: 1.09361 },
  { label: "Miles", value: 0.000621371 },
];

const LengthConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState(lengthUnits[0].value);
  const [toUnit, setToUnit] = useState(lengthUnits[1].value);
  const [convertedValue, setConvertedValue] = useState("");

  const convertLength = () => {
    if (!inputValue) return;
    const result = (inputValue * toUnit) / fromUnit;
    setConvertedValue(result.toFixed(4));
  };

  const switchUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{ p: 3 }}
      direction={{ xs: "column", md: "row" }}
    >
      <Grid item xs={12}>
                          <Typography
                            variant="h4"
                            textAlign="center"
                            sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}
                          >
                            Length Converter
                          </Typography>
                        </Grid>
      <Grid item xs={6} md={6}>
        <ReusableBox>
        {/* Inputs */}
        <TextField
          label="Enter Length"
          type="number"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel>From</InputLabel>
            <Select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              {lengthUnits.map((unit, index) => (
                <MenuItem key={index} value={unit.value}>
                  {unit.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <IconButton onClick={switchUnits} sx={{ mx: 2 }}>
            <SwapHorizIcon />
          </IconButton>

          <FormControl fullWidth>
            <InputLabel>To</InputLabel>
            <Select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              {lengthUnits.map((unit, index) => (
                <MenuItem key={index} value={unit.value}>
                  {unit.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={convertLength}
          sx={{ mt: 2 }}
        >
          Convert
        </Button>
        </ReusableBox>
      </Grid>

      {/* Results */}
      <Grid item xs={12} md={6}>
        <ReusableBox>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ fontWeight: "bold" }}
          >
            Results
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Cards
                title="Converted Value"
                value={convertedValue ? `${convertedValue}` : "-"}
              />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default LengthConverter;