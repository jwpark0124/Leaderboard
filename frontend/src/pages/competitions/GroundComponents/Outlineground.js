import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import Poster from '../GroundComponents/Poster';
import { Link } from 'react-router-dom';
import {
  faCube,
  faDatabase,
  faCode,
  faClipboardList,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutlineContexts from '../CompetitionsContexts/OutlineContexts';

function Outlineground() {
  // const [{ data: postList, loading, error }, refetch] = useAxios({
  //   url: 'http://localhost:8000/api/posts/',
  // });

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
        <div className="bg-white flex flex-wrap text-xs  md:text-sm lg:text-base  py-5 justify-center items-center w-3/4 border-solid border-b border-opacity-20 border-gray-500 sm:space-x-0  md:space-x-6 lg:space-x-32 xl:space-x-72 2xl:space-x-96">
          <div className="flex">
            <Link
              to="/competitions/outline"
              className="mr-0 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5"
            >
              <FontAwesomeIcon icon={faCube} />
              <span className="ml-0 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2">
                개요
              </span>
            </Link>
            <Link
              to="/competitions/dataset"
              className="mr-0 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5"
            >
              <FontAwesomeIcon icon={faDatabase} />
              <span className="ml-0 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2">
                데이터
              </span>
            </Link>
            <Link
              to="/competitions/baseline"
              className="mr-0 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5"
            >
              <FontAwesomeIcon icon={faCode} />
              <span className="ml-0 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2">
                베이스라인
              </span>
            </Link>
            <Link
              to="/competitions/leaderboard"
              className="mr-0 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5"
            >
              <FontAwesomeIcon icon={faClipboardList} />
              <span className="ml-0 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2">
                리더보드
              </span>
            </Link>
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
