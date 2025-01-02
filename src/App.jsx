import React from 'react';
import Button from './components/Button';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 font-sans">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Welcome to the App
      </h1>
      <p className="text-base font-medium text-neutral-700 mb-8 text-center px-4">
        Your seamless experience starts here.
      </p>
      <Button onClick={() => alert('Button Clicked!')}>
        Get Started
      </Button>
      <div className="mt-8">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary">
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}