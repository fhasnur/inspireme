import React from 'react';

export const SkeletonPost = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
    <div className="flex space-x-2">
      <div className="h-6 w-12 bg-gray-300 rounded"></div>
      <div className="h-6 w-12 bg-gray-300 rounded"></div>
      <div className="h-6 w-12 bg-gray-300 rounded"></div>
    </div>
  </div>
);