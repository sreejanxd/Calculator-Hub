import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import Cards from "../ui/Cards"; // Reusable Card Component
import ReusableBox from "../ui/Boxs";

const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [results, setResults] = useState({
    taxAmount: 0,
    netIncome: 0,
  });

  const calculateTax = () => {
    if (!income || !taxRate) return;

    const incomeValue = parseFloat(income);
    const rate = parseFloat(taxRate) / 100;

    const taxAmount = incomeValue * rate;
    const netIncome = incomeValue - taxAmount;

    setResults({
      taxAmount: taxAmount.toFixed(2),
      netIncome: netIncome.toFixed(2),
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
          Tax Calculator
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <ReusableBox>
          {/* Input Fields */}
          <TextField
            label="Annual Income"
            type="number"
            fullWidth
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
          <TextField
            label="Tax Rate (%)"
            type="number"
            fullWidth
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={calculateTax}
            sx={{ mt: 2 }}
          >
            Calculate Tax
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
              <Cards title="Tax Amount" value={`$${results.taxAmount}`} />
            </Grid>
            <Grid item xs={6}>
            <Cards 
              title="Net Income After Tax"
              value={`$${results.netIncome}`} />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default TaxCalculator;
