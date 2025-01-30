import React, { useState } from "react";
import { TextField, Button, Grid, Box,Typography } from "@mui/material";
import Cards from "../ui/Cards"; // Reusable Card Component
import ReusableBox from "../ui/Boxs";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let bmiCategory = "";
    if (bmiValue < 18.5) bmiCategory = "Underweight";
    else if (bmiValue >= 18.5 && bmiValue < 24.9) bmiCategory = "Normal Weight";
    else if (bmiValue >= 25 && bmiValue < 29.9) bmiCategory = "Overweight";
    else bmiCategory = "Obese";

    setBmi(bmiValue);
    setCategory(bmiCategory);
  };

  return (
    <Grid container
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
                BMI Calculator
              </Typography>
            </Grid>
      <Grid item xs={6} md={6}>
        <ReusableBox>
        {/* Inputs */}
        <TextField
          label="Weight (kg)"
          type="number"
          fullWidth
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          label="Height (cm)"
          type="number"
          fullWidth
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={calculateBMI}
          sx={{ mt: 2 }}
        >
          Calculate BMI
        </Button>
        </ReusableBox>
      </Grid>

      {/* Results */}
      <Grid item xs={12} md={6}>
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
              <Cards title="BMI Value" 
              value={bmi ? bmi : "-"} />
            </Grid>
            <Grid item xs={6}>
              <Cards title="Category" 
              value={category ? category : "-"} />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default BMICalculator;
