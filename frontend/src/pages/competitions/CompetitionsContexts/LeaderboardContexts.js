import React from 'react';
import useAxios from 'axios-hooks';
import LeaderboardTable from './LeaderboardTable';

function LeaderboardList() {
  const [{ data: leaderboardList, loading, error }, refetch] = useAxios({
    url: 'http://143.248.135.30:3194/getLeaderBoardList',
  });
  if (loading) return <p>Loading..</p>;
  console.error('list: ', leaderboardList);
  const leaderboardList2 = leaderboardList.data;

  return (
    <>
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
    </>
  );
}

export default LeaderboardList;
