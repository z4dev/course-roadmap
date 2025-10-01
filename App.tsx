
import React from 'react';
import RoadmapTable from './components/RoadmapTable';
import { roadmapData } from './data/roadmapData';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 p-4 sm:p-6 lg:p-8">
      <main className="bg-white rounded-xl shadow-lg overflow-hidden">
        <RoadmapTable data={roadmapData} />
      </main>
    </div>
  );
};

export default App;
