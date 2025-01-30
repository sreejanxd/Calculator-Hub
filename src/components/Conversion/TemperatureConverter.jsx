import React, { useState } from "react";
import {
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import Cards from "../ui/Cards";
import ReusableBox from "../ui/Boxs";
const temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin"];

const convertTemperature = (value, fromUnit, toUnit) => {
  if (isNaN(value) || value === "") return "";
  let temp = parseFloat(value);

  if (fromUnit === toUnit) return temp.toFixed(2);

  if (fromUnit === "Celsius") {
    if (toUnit === "Fahrenheit") return ((temp * 9) / 5 + 32).toFixed(2);
    if (toUnit === "Kelvin") return (temp + 273.15).toFixed(2);
  } else if (fromUnit === "Fahrenheit") {
    if (toUnit === "Celsius") return (((temp - 32) * 5) / 9).toFixed(2);
    if (toUnit === "Kelvin") return (((temp - 32) * 5) / 9 + 273.15).toFixed(2);
  } else if (fromUnit === "Kelvin") {
    if (toUnit === "Celsius") return (temp - 273.15).toFixed(2);
    if (toUnit === "Fahrenheit")
      return (((temp - 273.15) * 9) / 5 + 32).toFixed(2);
  }

  return "";
};

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Celsius");
  const [toUnit, setToUnit] = useState("Fahrenheit");
  const [convertedValue, setConvertedValue] = useState("");

  const handleConvert = () => {
    setConvertedValue(convertTemperature(inputValue, fromUnit, toUnit));
  };

  const swapUnits = () => {
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
          Temperature Converter
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <ReusableBox>
          {/* Inputs */}
          <TextField
            label="Enter Temperature"
            type="number"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Grid container spacing={1} sx={{ mt: 2 }}>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>From</InputLabel>
                <Select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                >
                  {temperatureUnits.map((unit, index) => (
                    <MenuItem key={index} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton onClick={swapUnits}>
                <SwapHoriz />
              </IconButton>
            </Grid>

            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>To</InputLabel>
                <Select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                >
                  {temperatureUnits.map((unit, index) => (
                    <MenuItem key={index} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            fullWidth
            onClick={handleConvert}
            sx={{ mt: 2 }}
          >
            Convert
          </Button>
        </ReusableBox>
      </Grid>

      {/* Results */}
      <Grid item xs={6}>
        <ReusableBox>
          {/* Heading for Results */}
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
                value={convertedValue ? `${convertedValue} ${toUnit}` : "-"}
              />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default TemperatureConverter;
