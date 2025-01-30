import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import Cards from "../ui/Cards";
import ReusableBox from "../ui/Boxs"; 

const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState(""); // Loan term in months now
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEMI = () => {
    if (!principal || !rate || !time) return;

    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12; // Monthly interest rate
    const n = parseFloat(time); // Loan term in months

    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));

    const totalAmountValue = emiValue * n;
    setTotalAmount(totalAmountValue.toFixed(2));

    const totalInterestValue = totalAmountValue - p;
    setTotalInterest(totalInterestValue.toFixed(2));
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
          EMI Calculator
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <ReusableBox>
        <TextField
          label="Loan Amount"
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
          label="Loan Term (Months)"
          type="number"
          fullWidth
          value={time}
          onChange={(e) => setTime(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={calculateEMI}
          sx={{ mt: 2 }}
        >
          Calculate EMI
        </Button>
        </ReusableBox>
      </Grid>

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

          {/* Cards Grid View */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Cards title="Monthly EMI" value={`₹${emi}`} />
            </Grid>
            <Grid item xs={6}>
              <Cards title="Total Loan Amount" value={`₹${totalAmount}`} />
            </Grid>
            <Grid item xs={6}>
              <Cards title="Total Interest" value={`₹${totalInterest}`} />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default EMICalculator;
