import React, { useState } from "react";
import { TextField, Button, Grid, MenuItem, Select, FormControl, InputLabel, Box,Typography } from "@mui/material";
import Cards from "../ui/Cards"; // Reusable Card Component
import ReusableBox from "../ui/Boxs";

const activityLevels = [
  { label: "Sedentary (Little to no exercise)", factor: 1.2 },
  { label: "Lightly Active (1-3 days/week)", factor: 1.375 },
  { label: "Moderately Active (3-5 days/week)", factor: 1.55 },
  { label: "Very Active (6-7 days/week)", factor: 1.725 },
  { label: "Super Active (Twice per day)", factor: 1.9 },
];

const CalorieCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(activityLevels[0].factor);
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!weight) return;

    // Basic estimation: Calories per kg * activity factor
    const baseCalories = weight * 22;
    const totalCalories = (baseCalories * activity).toFixed(0);

    setCalories(totalCalories);
  };

  return (
    <Grid container
    spacing={3}
    sx={{ p: 3 }}
    direction={{ xs: "column", md: "row" }}>
      <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      textAlign="center"
                      sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}
                    >
                      Calorie Calculator
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

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Activity Level</InputLabel>
          <Select value={activity} onChange={(e) => setActivity(e.target.value)}>
            {activityLevels.map((level, index) => (
              <MenuItem key={index} value={level.factor}>
                {level.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" fullWidth onClick={calculateCalories} sx={{ mt: 2 }}>
          Calculate Calories
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
            <Cards title="Daily Caloric Needs" 
            value={calories ? `${calories} kcal` : "-"} />

            </Grid>
            
            
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default CalorieCalculator;
