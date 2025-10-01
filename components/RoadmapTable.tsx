
import React from 'react';
import { RoadmapItem } from '../types';
import RoadmapRow from './RoadmapRow';

interface RoadmapTableProps {
  data: RoadmapItem[];
}

const RoadmapTable: React.FC<RoadmapTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
          <tr>
            <th scope="col" className="px-4 py-3 w-16 text-center">Day</th>
            <th scope="col" className="px-6 py-3 min-w-[200px]">Focus</th>
            <th scope="col" className="px-6 py-3 min-w-[300px]">Topics</th>
            <th scope="col" className="px-4 py-3 w-24 text-center">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <RoadmapRow key={item.day} item={item} isEven={index % 2 === 0} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoadmapTable;
