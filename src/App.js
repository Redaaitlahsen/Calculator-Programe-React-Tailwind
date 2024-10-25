import React, { useState } from 'react';
import './App.css';
import Footer from '../src/footer'; // Import the Footer component

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  // Append value to the display
  const appendValue = (value) => {
    setDisplayValue(prevValue => prevValue === '0' ? value : prevValue + value);
  };

  // Clear the display
  const clearDisplay = () => {
    setDisplayValue('0');
  };

  // Remove the last character from the display
  const backspace = () => {
    setDisplayValue(prevValue => prevValue.length > 1 ? prevValue.slice(0, -1) : '0');
  };

  // Calculate the result
  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col justify-between">
      <div className="flex justify-center items-center grow">
        <div className="bg-vintage-paper shadow-lg border-4 border-brown-500 p-6 max-w-sm w-full rounded-none">
          <h2 className="text-3xl font-bold text-center text-brown-700 mb-6 font-serif">Calculator</h2>

          <div className="bg-slate-300 rounded-sm shadow-inner p-3 mb-6">
            <input
              id="display"
              type="text"
              className="w-full text-2xl text-right bg-transparent focus:outline-none text-brown-800 font-mono"
              disabled
              value={displayValue}
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            <button className="col-span-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-none" onClick={clearDisplay}>C</button>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-none" onClick={backspace}>←</button>

            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('7')}>7</button>
            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('8')}>8</button>
            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('9')}>9</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('/')}>/</button>

            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('4')}>4</button>
            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('5')}>5</button>
            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('6')}>6</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('*')}>*</button>

            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('1')}>1</button>
            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('2')}>2</button>
            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('3')}>3</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('-')}>-</button>

            <button className="col-span-2 bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('0')}>0</button>
            <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('.')}>.</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-none" onClick={() => appendValue('+')}>+</button>

            <button className="col-span-4 bg-brown-600 hover:bg-brown-700 text-white font-bold py-3 rounded-none" onClick={calculate}>=</button>
          </div>
        </div>
      </div>

      <Footer /> 
    </div>
  );
}

export default App;
