import React from 'react';
import { Test2 } from './Test2';

export const Test3 = () => {
  return (
    <div
      style={{
        border: '4px solid blue',
        width: '400px',
        height: '400px',
        backgroundColor: '#333',
        padding: '4rem',
      }}
    >
      <Test2 />
    </div>
  );
};
