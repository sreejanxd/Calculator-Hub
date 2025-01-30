

// import React from "react";
// import { Stack, Paper } from "@mui/material";
// import Chips from "./ui/Chips"; // Import the reusable chip component

// const tools = [
//   { label: "Calculator", value: "calculator" },
//   { label: "Age Calculator", value: "age" },
//   { label: "Feet to CM Converter", value: "converter" },
//   { label: "Loan Calculator", value: "loanCalculator" },
//   { label: "EMI Calculator", value: "emiCalculator" },
//   { label: "Tax Calculator", value: "taxCalculator" },
//   { label: "Currency Converter", value: "currencyConverter" },
//   { label: "BMI Calculator ", value: "bmiCalculator" },
//   { label: "Calorie Calculator ", value: "calorieCalculator" },
//   { label: "Length Converter ", value: "lengthConverter" },
//   { label: "Weight Converter  ", value: "weightConverter" },
//   { label: "Temperature Converter    ", value: "temperatureConverter " },
// ];

// const NavBar = ({ selectedTool, setSelectedTool }) => {
//   return (
//     <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
//       <Stack
//         direction={{ xs: "column", sm: "row" }} // Stacks vertically on extra small screens, horizontally on small and above
//         spacing={2}
//         justifyContent="center"
//         alignItems="center" // Center items on both axis
//       >
//         {tools.map((tool) => (
//           <Chips
//             key={tool.value}
//             label={tool.label}
//             isSelected={selectedTool === tool.value}
//             onClick={() => setSelectedTool(tool.value)}
//           />
//         ))}
//       </Stack>
//     </Paper>
//   );
// };

// export default NavBar;

import React, { useRef } from "react";
import { Stack, Paper, IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Chips from "./ui/Chips"; // Import the reusable chip component

const tools = [
  { label: "Calculator", value: "calculator" },
  { label: "Age Calculator", value: "age" },
  { label: "Loan Calculator", value: "loanCalculator" },
  { label: "EMI Calculator", value: "emiCalculator" },
  { label: "Tax Calculator", value: "taxCalculator" },
  { label: "Currency Converter", value: "currencyConverter" },
  { label: "BMI Calculator", value: "bmiCalculator" },
  { label: "Calorie Calculator", value: "calorieCalculator" },
  { label: "Length Converter", value: "lengthConverter" },
  { label: "Weight Converter", value: "weightConverter" },
  { label: "Temperature Converter", value: "temperatureConverter" },
  { label: "Time Converter", value: "timeConverter" },
  { label: "Volume Converter", value: "volume-converter" },
  { label: "Speed Converter", value: "speedConverter" },
  { label: "Area Converter", value: "areaConverter" },
  { label: "Energy Converter", value: "energyConverter" },
];

const NavBar = ({ selectedTool, setSelectedTool }) => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3, position: "relative" }}>
      {/* Left Arrow - Hidden on mobile */}
      <IconButton
        onClick={() => scroll(-100)}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          display: { xs: "none", sm: "block" },
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Scrollable Stack */}
      <Box
        ref={scrollRef}
        sx={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          display: "flex",
          scrollbarWidth: "none", // Hide scrollbar in Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar in Webkit browsers
        }}
      >
        <Stack direction="row" spacing={2}>
          {tools.map((tool) => (
            <Chips
              key={tool.value}
              label={tool.label}
              isSelected={selectedTool === tool.value}
              onClick={() => setSelectedTool(tool.value)}
            />
          ))}
        </Stack>
      </Box>

      {/* Right Arrow - Hidden on mobile */}
      <IconButton
        onClick={() => scroll(100)}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          display: { xs: "none", sm: "block" },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Paper>
  );
};

export default NavBar;
