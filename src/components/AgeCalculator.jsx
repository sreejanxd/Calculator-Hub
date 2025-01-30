import React, { useState } from "react";
import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import Cards from "./ui/Cards"; // Reusable Card component
import ReusableBox from "./ui/Boxs";

const AgeCalculator = () => {
  const [fromDate, setFromDate] = useState(""); // Initially empty
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]); // Default to today
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const calculateAge = () => {
    if (!fromDate || !toDate) {
      setAge({ years: "Please select both dates" });
      return;
    }

    const from = new Date(fromDate);
    const to = new Date(toDate);

    if (from > to) {
      setAge({ years: "Invalid Date Range" });
      return;
    }

    const diffMs = to - from;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365);
    const diffMonths = Math.floor((diffDays % 365) / 30);
    const remainingDays = Math.floor((diffDays % 365) % 30);

    const diffHours = diffDays * 24;
    const diffMinutes = diffHours * 60;
    const diffSeconds = diffMinutes * 60;
    const diffMilliseconds = diffMs;

    setAge({
      years: diffYears,
      months: diffMonths,
      days: remainingDays,
      hours: diffHours,
      minutes: diffMinutes,
      seconds: diffSeconds,
      milliseconds: diffMilliseconds,
    });
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }} direction={{ xs: "column", md: "row" }}>
      <Grid item xs={12}>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ fontWeight: "bold", color: "#757575", mb: 2 }}
              >
                Age Calculator
              </Typography>
            </Grid>
      {/* Inputs Section */}
      <Grid item xs={12} md={6}>
        <ReusableBox>
        <TextField
          type="date"
          label="From Date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="date"
          label="To Date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" fullWidth onClick={calculateAge} sx={{ mt: 2 }}>
          Calculate Age
        </Button>
        </ReusableBox>
      </Grid>

      {/* Results Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", md: "auto" },
            overflowY: { xs: "scroll", md: "visible" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: "1px solid #ccc",
            p: 2,
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* Heading for Results */}
          <Typography variant="h5" textAlign="center" sx={{ fontWeight: "bold" }}>
            Results
          </Typography>

          {/* First Card: All Results in One */}
          <Cards
            title="Total Age"
            value={`${age.years} Years, ${age.months} Months, ${age.days} Days`}
          />

          {/* Cards Grid View - 3 per Row */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Cards title="Years" value={age.years} />
            </Grid>
            <Grid item xs={4}>
              <Cards title="Months" value={age.months} />
            </Grid>
            <Grid item xs={4}>
              <Cards title="Days" value={age.days} />
            </Grid>
            <Grid item xs={4}>
              <Cards title="Hours" value={age.hours} />
            </Grid>
            <Grid item xs={4}>
              <Cards title="Minutes" value={age.minutes} />
            </Grid>
            <Grid item xs={4}>
              <Cards title="Seconds" value={age.seconds} />
            </Grid>
            <Grid item xs={4}>
              <Cards title="Milliseconds" value={age.milliseconds} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AgeCalculator;
