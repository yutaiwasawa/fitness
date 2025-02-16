import React, { useState } from 'react';
import InputForm from './InputForm';

function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);

    const activityLevels = {
    sedentary: 1.2,
    lightlyActive: 1.375,
    moderatelyActive: 1.55,
    veryActive: 1.725,
    extraActive: 1.9,
  };


  const calculateCalories = () => {
    // Mifflin-St Jeor Equation
    let bmr;
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;

    setCalories(Math.round(bmr * activityLevels[activityLevel]));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Calorie Calculator</h2>
      <InputForm label="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <InputForm label="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
      <InputForm label="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">Activity Level</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="lightlyActive">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="moderatelyActive">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="veryActive">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="extraActive">Extra active (very hard exercise/sports & a physical job)</option>
        </select>
      </div>
      <button onClick={calculateCalories} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Calculate Calories
      </button>
      {calories && (
        <div className="mt-4">
          <p className="text-lg">Estimated Daily Calories: <span className="font-bold">{calories}</span></p>
        </div>
      )}
    </div>
  );
}

export default CalorieCalculator;
