import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 border-4 border-purple-500 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 