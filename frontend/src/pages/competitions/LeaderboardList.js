import React from 'react';
import useAxios from 'axios-hooks';
import {
  faCube,
  faDatabase,
  faCode,
  faClipboardList,
  faQuestionCircle,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeaderboardTable from './LeaderboardTable';

function LeaderboardList() {
  const [{ data: leaderboardList, loading, error }, refetch] = useAxios({
    url: 'http://localhost:8000/api/puts/',
  });

  return (
    <>
      <div className="bg-gray-100 opacity- h-screen flex flex-col justify-center items-center">
        <div className="bg-red-500 w-2/3 h-1/3 flex flex-col justify-center items-center rounded-3xl ">
          <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-2xl font-black mb-14">
            Leaderboard
          </h1>
        </div>
        <div className="text-xl flex mt-10 p-4 justify-center items-center bg-red-300 w-2/3 rounded-t-2xl">
          진행
        </div>
        <div className="flex py-5 justify-center items-center w-2/3 border-solid border-b border-opacity-20 border-gray-500 space-x-96">
          <div className="flex">
            <div className="mr-5">
              <FontAwesomeIcon icon={faCube} />
              <span className="text-base ml-2">개요</span>
            </div>
            <div className="mr-5">
              <FontAwesomeIcon icon={faDatabase} />
              <span className="text-base ml-2">데이터</span>
            </div>
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
        <div className="bg-white w-2/3 h-2/5  flex flex-col rounded-b-3xl board">
          <p className="m-4 text-yellow-500 text-sm">공개순위</p>

          {loading && <div>Loading...</div>}
          {error && <div>로딩 중에 에러가 발생했습니다.</div>}
          <table className="table-fixed justify-center items-center text-center">
            <thead className="bg-gray-100 border-t border-black border-opacity-50 not-italic">
              <tr className="text-xs h-8">
                <th className="w-1/5">순위</th>
                <th className="w-1/5">유저이름</th>
                <th className="w-1/5">점수</th>
                <th className="w-1/5">회차</th>
                <th className="w-1/5">제출횟수</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {leaderboardList &&
                leaderboardList.map((leaderboardTable) => {
                  return (
                    <LeaderboardTable
                      leaderboardTable={leaderboardTable}
                      key={leaderboardTable.pk}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default LeaderboardList;
