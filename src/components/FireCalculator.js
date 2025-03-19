import React, { useState } from 'react';
import '../styles/FireCalculator.css';

const FireCalculator = () => {
  const [formData, setFormData] = useState({
    monthlyExpenses: '',
    currentAge: '',
    retirementAge: '',
    inflationRate: '7', // Default 7%
    coastAge: '',
    growthRate: '10', // Default 10%
  });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateFire = (e) => {
    e.preventDefault();
    const {
      monthlyExpenses,
      currentAge,
      retirementAge,
      inflationRate,
      coastAge,
      growthRate,
    } = formData;

    // Convert to numbers
    const monthly = parseFloat(monthlyExpenses);
    const currAge = parseInt(currentAge);
    const retAge = parseInt(retirementAge);
    const infRate = parseFloat(inflationRate) / 100;
    const coast = parseInt(coastAge);
    const growRate = parseFloat(growthRate) / 100;

    // Calculations
    const yearlyExpensesToday = monthly * 12;
    const yearsToRetirement = retAge - currAge;
    const yearlyExpensesRetirement = yearlyExpensesToday * Math.pow(1 + infRate, yearsToRetirement);

    const leanFire = yearlyExpensesRetirement * 20;
    const fire = yearlyExpensesRetirement * 25;
    const fatFire = yearlyExpensesRetirement * 50;

    const yearsToCoast = coast - retAge;
    const coastFire = fire * Math.pow(1 + growRate, yearsToCoast);

    setResults({
      yearlyExpensesToday,
      yearlyExpensesRetirement,
      leanFire,
      fire,
      fatFire,
      coastFire,
    });
  };

  return (
    <div className="fire-calculator">
      <h2>FIRE Number Calculator</h2>
      <form onSubmit={calculateFire}>
        <div className="form-group">
          <label>Desired Monthly Expenses (Today):</label>
          <input
            type="number"
            name="monthlyExpenses"
            value={formData.monthlyExpenses}
            onChange={handleChange}
            placeholder="e.g., 1000"
            required
          />
        </div>
        <div className="form-group">
          <label>Current Age:</label>
          <input
            type="number"
            name="currentAge"
            value={formData.currentAge}
            onChange={handleChange}
            placeholder="e.g., 21"
            required
          />
        </div>
        <div className="form-group">
          <label>Retirement Age:</label>
          <input
            type="number"
            name="retirementAge"
            value={formData.retirementAge}
            onChange={handleChange}
            placeholder="e.g., 27"
            required
          />
        </div>
        <div className="form-group">
          <label>Inflation Rate (%):</label>
          <input
            type="number"
            name="inflationRate"
            value={formData.inflationRate}
            onChange={handleChange}
            placeholder="e.g., 7"
            required
          />
        </div>
        <div className="form-group">
          <label>Desired Coast FIRE Age:</label>
          <input
            type="number"
            name="coastAge"
            value={formData.coastAge}
            onChange={handleChange}
            placeholder="e.g., 35"
            required
          />
        </div>
        <div className="form-group">
          <label>Investment Growth Rate (%):</label>
          <input
            type="number"
            name="growthRate"
            value={formData.growthRate}
            onChange={handleChange}
            placeholder="e.g., 10"
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>

      {results && (
        <div className="results">
          <h3>Your FIRE Numbers</h3>
          <p>Yearly Expenses (Today): ${results.yearlyExpensesToday.toLocaleString()}</p>
          <p>Yearly Expenses (Retirement): ${results.yearlyExpensesRetirement.toLocaleString()}</p>
          <p>Lean FIRE: ${results.leanFire.toLocaleString()}</p>
          <p>FIRE: ${results.fire.toLocaleString()}</p>
          <p>Fat FIRE: ${results.fatFire.toLocaleString()}</p>
          <p>Coast FIRE: ${results.coastFire.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default FireCalculator;