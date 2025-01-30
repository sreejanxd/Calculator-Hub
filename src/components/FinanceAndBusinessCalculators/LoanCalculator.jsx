import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import Cards from "../ui/Cards"; // Reusable Card Component
import ReusableBox from "../ui/Boxs"; 

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [results, setResults] = useState({
    totalInterest: 0,
    totalAmount: 0,
    monthlyPayment: 0,
  });

  const calculateLoan = () => {
    if (!principal || !rate || !time) return;

    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    const totalInterest = p * r * t;
    const totalAmount = p + totalInterest;
    const monthlyPayment = totalAmount / (t * 12);

    setResults({
      totalInterest: totalInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
    });
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
          Loan Calculator
        </Typography>
      </Grid>
      <Grid item xs={6} md={6}>
        <ReusableBox>
        {/* Input Fields */}
        <TextField
          label="Principal Amount"
          type="number"
          fullWidth
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <TextField
          label="Annual Interest Rate (%)"
          type="number"
          fullWidth
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          label="Loan Term (Years)"
          type="number"
          fullWidth
          value={time}
          onChange={(e) => setTime(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={calculateLoan}
          sx={{ mt: 2 }}
        >
          Calculate Loan
        </Button>
        </ReusableBox>
      </Grid>

      {/* Results in Cards */}
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
              <Cards
                title="Total Interest"
                value={`₹${results.totalInterest}`}
              />
            </Grid>
            <Grid item xs={6}>
              <Cards
                title="Total Repayment"
                value={`₹${results.totalAmount}`}
              />
            </Grid>
            <Grid item xs={6}>
              <Cards
                title="Monthly Payment"
                value={`₹${results.monthlyPayment}`} // Displaying Rupee symbol
              />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default LoanCalculator;
