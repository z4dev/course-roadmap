
import React from 'react';
import { RoadmapItem } from '../types';

interface RoadmapRowProps {
  item: RoadmapItem;
  isEven: boolean;
}

const RoadmapRow: React.FC<RoadmapRowProps> = ({ item, isEven }) => {
  const rowClass = isEven ? 'bg-white' : 'bg-gray-50';

  return (
    <tr className={`${rowClass} border-b border-gray-200 align-top`}>
      <td className="px-4 py-4 text-center">
        <div className="w-10 h-10 mx-auto flex items-center justify-center bg-indigo-100 text-indigo-700 font-bold rounded-full">
          {item.day}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="font-bold text-gray-800">{item.focus}</div>
        <p className="text-gray-600 mt-1">{item.description}</p>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {item.topics.map((topic, index) => (
            <span key={index} className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {topic}
            </span>
          ))}
        </div>
      </td>
      <td className="px-4 py-4 text-center font-medium text-gray-600">{item.time}</td>
    </tr>
  );
};

export default RoadmapRow;
