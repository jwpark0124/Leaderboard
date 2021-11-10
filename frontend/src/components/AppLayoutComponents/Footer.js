import React from 'react';

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <>
      <div className="flex justify-center items-center h-16 bg-black text-white">
        <p>
          &copy {thisYear()} Adaptive Intelligence Research All rights reserved.
        </p>
        <a className="text-blue-900" href="/">
          &nbsp; | Site by Teampl100
        </a>
      </div>
    </>
  );
};

export default Footer;
