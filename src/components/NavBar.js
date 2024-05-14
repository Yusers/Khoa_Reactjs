import React, { useState } from 'react';
import { Icons } from './Icons';
import { FaHome } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { CiStickyNote } from 'react-icons/ci';

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconStyle = {
    cursor: 'pointer',
    color: isHovered ? 'white' : 'black', // Change the color on hover
    transition: 'color 0.3s ease', // Smooth transition
    background: isHovered ? '#333' : '#fff',
  };

  return (
    <div
      style={{
        width: '480px',
        height: '74px',
        padding: '70px',
        display: 'flex',
        border: '2px solid #333',
        justifyContent: 'space-between',
      }}
    >
      <Icons icon={<FaHome style={{ fontSize: '2.2rem' }} />} />
      <Icons icon={<CiSearch style={{ fontSize: '2.2rem' }} />} />
      <Icons icon={<CiStickyNote style={{ fontSize: '2.2rem' }} />} />
    </div>
  );
};
