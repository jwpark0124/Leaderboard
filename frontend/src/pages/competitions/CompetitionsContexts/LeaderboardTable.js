function LeaderboardTable({ leaderboardTable }) {
  const { rank, user_id, score, submit_count, submit_date } = leaderboardTable;

  return (
    <tr className="h-8 border-b border-black border-opacity-10">
      <td className="w-1/5">{rank}</td>
      <td className="w-1/5">{user_id}</td>
      <td className="w-1/5">{score}</td>
      <td className="w-1/5">{submit_count}</td>
      <td className="w-1/5">{submit_date}</td>
    </tr>
  );
}
export default LeaderboardTable;
