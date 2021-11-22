import OutlineContexts from '../CompetitionsContexts/OutlineContexts';
import React from 'react';
import Poster from './Poster';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import outline2 from '../../../assets/outline2.png';
import outline from '../../../assets/outline.png';
import data2 from '../../../assets/data2.png';
import data from '../../../assets/data.png';
import baseline2 from '../../../assets/baseline2.png';
import baseline from '../../../assets/baseline.png';
import leaderboard2 from '../../../assets/leaderboard2.png';
import leaderboard from '../../../assets/leaderboard.png';

function Outlineground() {
  // const [{ data: postList, loading, error }, refetch] = useAxios({
  //   url: 'http://localhost:8000/api/posts/',
  // });

  const isWep = useMediaQuery({
    query: '(min-width : 768px) and (max-width :1920px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width :0px) and (max-width :767px)',
  });

  return (
    <>
      <div className="bg-gray-100 flex flex-col flex-wrap justify-center items-center">
        <Poster />
        {/* {postList &&
          postList.map((poster) => {
            return <Poster poster={poster} key={poster.user} />;
          })} */}
        <div className="text-xl flex flex-wrap mt-10 p-0 justify-center items-center bg-red-300 w-3/4 rounded-t-2xl">
          진행중
        </div>
        <div className="bg-white p-2 px-auto w-3/4 border-solid border-b border-opacity-20 border-gray-500">
          <div className="flex justify-center space-x-2 sm:space-x-8 md:space-x-20">
            <div className="">
              <Link to="/competitions/outline">
                {isWep && <img className="w-12 h-5" src={outline2} alt="" />}
                {isMobile && <img className="w-8 h-4" src={outline} alt="" />}
              </Link>
            </div>
            <div>
              <Link to="/competitions/dataset">
                {isWep && <img className="w-16 h-5" src={data2} alt="" />}
                {isMobile && <img className="w-10 h-4" src={data} alt="" />}
              </Link>
            </div>
            <div>
              <Link to="/competitions/baseline">
                {isWep && <img className="w-27 h-5" src={baseline2} alt="" />}
                {isMobile && <img className="w-16 h-4" src={baseline} alt="" />}
              </Link>
            </div>
            <div>
              <Link to="/competitions/leaderboard">
                {isWep && (
                  <img className="w-25 h-5" src={leaderboard2} alt="" />
                )}
                {isMobile && (
                  <img className="w-14 h-4" src={leaderboard} alt="" />
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white w-3/4  flex flex-col rounded-b-3xl mb-20">
          <OutlineContexts />
          {/* {postList &&
            postList.map((koreanQnAChallenges) => {
              return (
                <KoreanQnAChallenges
                  koreanQnAChallenges={koreanQnAChallenges}
                  key={koreanQnAChallenges.user}
                />
              );
            })} */}
        </div>
      </div>
    </>
  );
}

export default Outlineground;
