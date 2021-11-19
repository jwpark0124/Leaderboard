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
            <img className="w-28  bg-white" src={teddy_log} alt="" />
          </button>
          <li className="pt-2">대표이사: 함영균</li>
          <li>사업자등록번호: 277-86-01995</li>
          <li>이메일: hahmyg@teddysum.ai</li>
          <li>
            {' '}
            주소: 경기도 성남시 수정구 대왕판교로 815,기업지원허브 창업존 7층
            706호 (시흥동, 판교창조경제밸리)
          </li>
          <li>(주) 테디썸 | ⓒ{thisYear()} All rights reserved.</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
