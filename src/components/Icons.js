import React from 'react';

export const Icons = ({ icon }) => {
  return (
    <div
      style={{
        width: '92px',
        height: '66px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {icon}
    </div>
  );
};
