import React from 'react';
import Container from '@/app/ui/container';

const SkeletonPostDetail = () => (
  <section className="flex w-3/4 my-16">
    <Container>
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-gray-300 rounded w-3/4"></div>
        <div className="flex items-center space-x-4 text-gray-600 mt-2">
          <div className="flex items-center space-x-1">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-10"></div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-10"></div>
          </div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="flex space-x-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-6 w-24 bg-gray-300 rounded"></div>
          ))}
        </div>
        <div className="mt-16">
          <h4 className="text-base font-semibold tracking-tight leading-normal bg-gray-300 h-6 w-1/4"></h4>
          <div className="space-y-4 mt-5 mb-5">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default SkeletonPostDetail;
