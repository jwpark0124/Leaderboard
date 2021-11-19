import React from 'react';
import useAxios from 'axios-hooks';
import LeaderboardTable from './LeaderboardTable';
import nia from '../../../../src/assets/NIA.jpg';
import kaist from '../../../../src/assets/한국판뉴딜.png';
import sit from '../../../../src/assets/과학기술정보통신부.jpg';

function LeaderboardList() {
  const [{ data: leaderboardList, loading, error }, refetch] = useAxios({
    url: 'http://143.248.135.30:3194/getLeaderBoardList',
  });
  if (loading) return <p>Loading..</p>;
  console.error('list: ', leaderboardList);
  const leaderboardList2 = leaderboardList.data;

  return (
    <>
      <div className="mb-12">
        <table className="table-fixed justify-center items-center text-center">
          <thead className="bg-gray-100 border-t border-black border-opacity-50 not-italic">
            <tr className="text-xs h-8">
              <th className="w-1/5">순위</th>
              <th className="w-1/5">유저이름</th>
              <th className="w-1/5">점수</th>
              <th className="w-1/5">제출횟수</th>
              <th className="w-1/5">제출시간</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {leaderboardList2 &&
              leaderboardList2.map((leaderboardTable) => {
                return (
                  <LeaderboardTable
                    leaderboardTable={leaderboardTable}
                    key={leaderboardTable.user_id}
                  />
                );
              })}
          </tbody>
        </table>
        <div className="flex flex-wrap justify-around mt-10 text-center">
          <img className="w-32" src={sit} alt="" />
          <img className="w-32" src={nia} alt="" />
          <img className="w-32" src={kaist} alt="" />
        </div>
      </div>
    </>
  );
}

export default LeaderboardList;
