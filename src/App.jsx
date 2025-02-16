import React from 'react';
import Dashboard from './components/Dashboard';
import CalorieCalculator from './components/CalorieCalculator';
import ProteinCalculator from './components/ProteinCalculator';
import GoalSetter from './components/GoalSetter';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Fitness Goal Tracker</h1>
      </header>
      <main className="p-4">
        <Dashboard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CalorieCalculator />
          <ProteinCalculator />
          <GoalSetter />
        </div>
      </main>
    </div>
  );
}

export default App;
