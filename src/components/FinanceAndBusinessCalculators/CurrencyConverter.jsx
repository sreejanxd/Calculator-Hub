import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Typography,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Cards from "../ui/Cards"; // Reusable Card Component
import ReusableBox from "../ui/Boxs";

const currencyOptions = [
  "USD",
  "EUR",
  "GBP",
  "INR",
  "AUD",
  "CAD",
  "JPY",
  "CNY",
]; 

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");

  const getExchangeRate = (from, to) => {
    const exchangeRates = {
      USD: {
        EUR: 0.85,
        GBP: 0.75,
        INR: 74.5,
        AUD: 1.34,
        CAD: 1.25,
        JPY: 110,
        CNY: 6.45,
      },
      EUR: {
        USD: 1.18,
        GBP: 0.88,
        INR: 87.5,
        AUD: 1.57,
        CAD: 1.48,
        JPY: 129.5,
        CNY: 7.6,
      },
      GBP: {
        USD: 1.34,
        EUR: 1.14,
        INR: 101,
        AUD: 1.83,
        CAD: 1.72,
        JPY: 148,
        CNY: 8.5,
      },
      INR: {
        USD: 0.013,
        EUR: 0.011,
        GBP: 0.0099,
        AUD: 0.018,
        CAD: 0.017,
        JPY: 1.46,
        CNY: 0.088,
      },
    };
    return exchangeRates[from]?.[to] || 1;
  };

  const convertCurrency = () => {
    if (!amount || isNaN(amount)) return;
    const rate = getExchangeRate(fromCurrency, toCurrency);
    setConvertedAmount((amount * rate).toFixed(2));
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
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
          Currency Converter
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <ReusableBox>
          <TextField
            label="Enter Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>From</InputLabel>
                <Select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {currencyOptions.map((cur) => (
                    <MenuItem key={cur} value={cur}>
                      {cur}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2} display="flex" justifyContent="center">
              <IconButton onClick={handleSwap}>
                <SwapHorizIcon />
              </IconButton>
            </Grid>

            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>To</InputLabel>
                <Select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currencyOptions.map((cur) => (
                    <MenuItem key={cur} value={cur}>
                      {cur}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            fullWidth
            onClick={convertCurrency}
            sx={{ mt: 2 }}
          >
            Convert
          </Button>
        </ReusableBox>
      </Grid>

      <Grid item xs={6}>
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
                title="Converted Amount"
                value={
                  convertedAmount ? `${convertedAmount} ${toCurrency}` : "-"
                }
              />
            </Grid>
          </Grid>
        </ReusableBox>
      </Grid>
    </Grid>
  );
};

export default CurrencyConverter;
