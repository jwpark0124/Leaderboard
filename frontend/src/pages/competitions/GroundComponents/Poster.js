// import { Picture } from 'react-responsive-picture';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

import groundWeb from '../../../assets/ground_web.png';
import groundMobile from '../../../assets/ground_mobile.png';

function Poster({ poster }) {
  // const { title, explanation, host, period1, period2, award, Participant } =
  //   poster;
  const small = { groundMobile };
  const large = { groundWeb };

  return (
    <>
      {/* <ResponsiveImage>
        <ResponsiveImageSize default minWidth={0} path={large} />
      </ResponsiveImage> */}
    </>
  );
}
export default Poster;
