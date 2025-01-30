// import React, { useState } from "react";
// import { Container, TextField, Button, Grid, Paper, Typography } from "@mui/material";

// const Calculator = () => {
//   const [expression, setExpression] = useState("");
//   const [history, setHistory] = useState([]);

//   const handleButtonClick = (value) => setExpression((prev) => prev + value);
//   const clearDisplay = () => setExpression("");
//   const calculateResult = () => {
//     try {
//       const result = eval(expression);
//       setExpression(result.toString());
//       setHistory([...history, `${expression} = ${result}`]);
//     } catch {
//       setExpression("Error");
//     }
//   };

//   const clearHistory = () => setHistory([]);

//   return (
//     <Container maxWidth="md">
//       <Grid container spacing={3} sx={{ mt: 3 }}>
//         {/* Calculator */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
//             <TextField fullWidth value={expression} disabled variant="outlined" />
//             <Grid container spacing={1} sx={{ mt: 2 }}>
//               {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"].map((btn) => (
//                 <Grid item xs={3} key={btn}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     color={btn === "C" ? "error" : btn === "=" ? "primary" : "secondary"}
//                     onClick={() =>
//                       btn === "C"
//                         ? clearDisplay()
//                         : btn === "="
//                         ? calculateResult()
//                         : handleButtonClick(btn)
//                     }
//                   >
//                     {btn}
//                   </Button>
//                 </Grid>
//               ))}
//             </Grid>
//           </Paper>
//         </Grid>

//         {/* History */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 2, height: 300, overflowY: "auto" }}>
//             <Typography variant="h6">History</Typography>
//             <ul style={{ padding: 0, margin: 0, listStyleType: "none" }}>
//               {history.map((item, index) => (
//                 <li key={index} style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <Button variant="contained" color="error" onClick={clearHistory} fullWidth sx={{ mt: 2 }}>
//               Clear History
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Calculator;


import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";
import Boxs from "./ui/Boxs"; // Importing the reusable Boxs component

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => setExpression((prev) => prev + value);
  const clearDisplay = () => setExpression("");
  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
      setHistory([...history, `${expression} = ${result}`]);
    } catch {
      setExpression("Error");
    }
  };

  const clearHistory = () => setHistory([]);

  return (
    <Container maxWidth="md">
      

      <Grid container spacing={3}>
        {/* Calculator Section */}
        <Grid item xs={12} md={6}>
          <Boxs>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Calculator
            </Typography>
            <TextField fullWidth value={expression} disabled variant="outlined" />
            <Grid container spacing={1} sx={{ mt: 2 }}>
              {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"].map((btn) => (
                <Grid item xs={3} key={btn}>
                  <Button
                    fullWidth
                    variant="contained"
                    color={btn === "C" ? "error" : btn === "=" ? "primary" : "secondary"}
                    onClick={() =>
                      btn === "C"
                        ? clearDisplay()
                        : btn === "="
                        ? calculateResult()
                        : handleButtonClick(btn)
                    }
                  >
                    {btn}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Boxs>
        </Grid>

        {/* History Section using Boxs */}
        <Grid item xs={12} md={6}>
          <Boxs>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              History
            </Typography>
            <ul style={{ padding: 0, margin: 0, listStyleType: "none" }}>
              {history.map((item, index) => (
                <li key={index} style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="contained" color="error" onClick={clearHistory} fullWidth sx={{ mt: 2 }}>
              Clear History
            </Button>
          </Boxs>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
