import React from 'react';

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <>
      <div className="flex justify-center items-center h-16 bg-black text-white"></div>
    </>
  );
};

export default Footer;
