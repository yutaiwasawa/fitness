import React, { useState } from 'react';

function GoalSetter() {
  const [goal, setGoal] = useState('maintain');

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Set Your Fitness Goal</h2>
      <div className="mb-2">
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="maintain">Maintain weight</option>
          <option value="lose">Lose weight</option>
          <option value="gain">Gain muscle</option>
        </select>
      </div>
      <p>Goal setting logic will be implemented here...</p>
    </div>
  );
}

export default GoalSetter;
