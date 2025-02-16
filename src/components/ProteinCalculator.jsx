import React, { useState } from 'react';
import InputForm from './InputForm';

function ProteinCalculator() {
  const [weight, setWeight] = useState('');
  const [protein, setProtein] = useState(null);

  const calculateProtein = () => {
    // Simple calculation: 0.8g protein per kg of body weight
    setProtein(Math.round(weight * 0.8));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Protein Calculator</h2>
      <InputForm label="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <button onClick={calculateProtein} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Calculate Protein
      </button>
      {protein && (
        <div className="mt-4">
          <p className="text-lg">Estimated Daily Protein: <span className="font-bold">{protein}g</span></p>
        </div>
      )}
    </div>
  );
}

export default ProteinCalculator;
