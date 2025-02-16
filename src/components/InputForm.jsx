import React from 'react';

function InputForm({ label, value, onChange }) {
  return (
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="border rounded p-2 w-full"
      />
    </div>
  );
}

export default InputForm;
