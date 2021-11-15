import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import Poster from './Poster';
import { Link } from 'react-router-dom';
import {
  faCube,
  faDatabase,
  faCode,
  faClipboardList,
  faQuestionCircle,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import KoreanQnAChallenges from '../CompetitionsOutlineContexts/KoreanQnAChallenges';

function Ground() {
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
        <div className="text-xl flex flex-wrap mt-10 p-0 justify-center items-center bg-red-300 w-2/3 rounded-t-2xl">
          진행중
        </div>
        <div className="bg-white flex flex-wrap text-xs  md:text-sm lg:text-base  py-5 justify-center items-center w-2/3 border-solid border-b border-opacity-20 border-gray-500 sm:space-x-0  md:space-x-6 lg:space-x-32 xl:space-x-72 2xl:space-x-96">
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
            <div className="mr-0 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5">
              <FontAwesomeIcon icon={faCode} />
              <span className="ml-0 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2">
                베이스라인
              </span>
            </div>
            <div className="mr-0 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5">
              <FontAwesomeIcon icon={faClipboardList} />
              <span className="ml-0 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2">
                리더보드
              </span>
            </div>
            <div className="mr-0 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className="ml-0 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2">
                Q&A
              </span>
            </div>
          </div>
          <div className="text-white rounded-lg w-17 lg:w-20 h-6 lg:h-8  text-xs bg-yellow-500 text-center align-middle pt-1 lg:pt-2">
            <FontAwesomeIcon icon={faUpload} />
            <button className="border-solid border-0 ml-1">제출하기</button>
          </div>
        </div>
        <div className="bg-white w-2/3  flex flex-col rounded-b-3xl mb-20">
          <KoreanQnAChallenges />
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

export default Ground;
