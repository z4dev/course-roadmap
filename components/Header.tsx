
import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';

const Header: React.FC = () => {
  return (
    <header className="text-gray-700">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Your JavaScript Learning Roadmap</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl">
        Welcome! This structured, one-hour-per-day plan will guide you
        through mastering JavaScript over approximately 90 days.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="font-semibold text-gray-700">
          <span className="text-indigo-600">Plan Overview:</span> 90 Days • 1 Hour Per Day
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          <DownloadIcon />
          <span>Download as PDF</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
