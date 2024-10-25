import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-950 text-white z-50">
      <div className="loading loading-infinity loading-lg"></div>
    </div>
  );
};

export default Loading;
