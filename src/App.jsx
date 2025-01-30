import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Calculator from "./components/Calculator";
import AgeCalculator from "./components/AgeCalculator";
import UnitConverter from "./components/UnitConverter";
import LoanCalculator from "./components/FinanceAndBusinessCalculators/LoanCalculator";
import EMICalculator from "./components/FinanceAndBusinessCalculators/EMICalculator";
import TaxCalculator from "./components/FinanceAndBusinessCalculators/TaxCalculator";
import CurrencyConverter from "./components/FinanceAndBusinessCalculators/CurrencyConverter";
import BMICalculator from "./components/HealthAndFitness/BMICalculator";
import CalorieCalculator from "./components/HealthAndFitness/CalorieCalculator";
import LengthConverter from "./components/Conversion/LengthConverter";
import WeightConverter from "./components/Conversion/WeightConverter";
import TemperatureConverter from "./components/Conversion/TemperatureConverter";
import SpeedConverter from "./components/Conversion/SpeedConverter";
import TimeDate from "./components/TimeDate";
import Footer from "./components/Footer";
import TimeConverter from "./components/Conversion/convertTime";
import VolumeConverter from "./components/Conversion/VolumeConverter";
import EnergyConverter from "./components/Conversion/EnergyConverter";
import AreaConverter from "./components/Conversion/AreaConverter";

function App() {
  const [selectedTool, setSelectedTool] = useState("calculator");

  return (
    <div style={{ padding: "20px" }}>
      <NavBar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      {selectedTool === "calculator" && <Calculator />}
      {selectedTool === "age" && <AgeCalculator />}
      {selectedTool === "loanCalculator" && <LoanCalculator />}
      {selectedTool === "emiCalculator" && <EMICalculator />}
      {selectedTool === "taxCalculator" && <TaxCalculator />}
      {selectedTool === "currencyConverter" && <CurrencyConverter />}
      {selectedTool === "bmiCalculator" && <BMICalculator />}
      {selectedTool === "calorieCalculator" && <CalorieCalculator />}
      {selectedTool === "lengthConverter" && <LengthConverter />}
      {selectedTool === "weightConverter" && <WeightConverter />}
      {selectedTool === "temperatureConverter" && <TemperatureConverter />}
      {selectedTool === "timeConverter" && <TimeConverter />}
      {selectedTool === "volume-converter" && <VolumeConverter />}
      {selectedTool === "speedConverter" && <SpeedConverter />}
      {selectedTool === "areaConverter" && <AreaConverter />}
      {selectedTool === "energyConverter" && <EnergyConverter />}

      <TimeDate />
      <Footer />
    </div>
  );
}

export default App;
