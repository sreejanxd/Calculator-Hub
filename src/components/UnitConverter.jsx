import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, Grid } from "@mui/material";
import ReusableCard from "./ui/Cards";

const UnitConverter = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [unit, setUnit] = useState("cm-in");

  const conversions = {
    "cm-in": { label: "CM to Inches", factor: 0.393701 },
    "in-cm": { label: "Inches to CM", factor: 2.54 },
  };

  const convert = () => {
    if (value === "" || isNaN(value)) {
      setResult("Invalid Input");
      return;
    }

    setResult((value * conversions[unit].factor).toFixed(2));
  };

  return (
    <ReusableCard title="Unit Converter">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="Enter Value" type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <Select fullWidth value={unit} onChange={(e) => setUnit(e.target.value)}>
            {Object.entries(conversions).map(([key, { label }]) => (
              <MenuItem key={key} value={key}>{label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth onClick={convert}>Convert</Button>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Result" value={result} disabled />
        </Grid>
      </Grid>
    </ReusableCard>
  );
};

export default UnitConverter;
