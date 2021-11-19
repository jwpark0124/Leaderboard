import React from 'react';
import teddy_log from '../../assets/teddysum_logo.png';

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <>
      <div className="flex pl-32 p-5 items-center bg-black text-white">
        <ul>
          <button onClick={() => window.open('http://teddysum.ai/', '_blank')}>
            <img className="w-28  " src={teddy_log} alt="" />
          </button>

          <li>(주) 테디썸 | ⓒ{thisYear()} All rights reserved.</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
