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
import KoreanQnAChallenges from '../CompetitionsDatesetContexts/KoreanQnAChallenges';

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
        <div className="text-xl flex flex-wrap mt-10 p-4 justify-center items-center bg-red-300 w-2/3 rounded-t-2xl">
          진행중
        </div>
        <div className="bg-white flex flex-wrap py-5 justify-center items-center w-2/3 border-solid border-b border-opacity-20 border-gray-500 space-x-96">
          <div className="flex">
            <Link to="/competitions/outline" className="mr-5">
              <FontAwesomeIcon icon={faCube} />
              <span className="text-base ml-2">개요</span>
            </Link>
            <Link to="/competitions/dataset" className="mr-5">
              <FontAwesomeIcon icon={faDatabase} />
              <span className="text-base ml-2">데이터</span>
            </Link>
            <div className="mr-5">
              <FontAwesomeIcon icon={faCode} />
              <span className="text-base ml-2">베이스라인</span>
            </div>
            <div className="mr-5">
              <FontAwesomeIcon icon={faClipboardList} />
              <span className="text-base ml-2">리더보드</span>
            </div>
            <div className="mr-5">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className="text-base ml-2">Q&A</span>
            </div>
          </div>
          <div className="text-white rounded-lg text-xs bg-yellow-500 p-2">
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
