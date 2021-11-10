function Poster({ poster }) {
  const { title, explanation, host, period1, period2, award, Participant } =
    poster;

  return (
    <>
      <div className="bg-purple-500 text-white w-2/3 justify-center flex flex-col rounded-3xl p-6 mt-28">
        <div className="block">
          <div className="flex ml-6 text-2xl">{title}</div>
          <div className="flex mt-1 ml-6 text-base opacity-60">
            {explanation}
          </div>
          <div className="flex">
            <div className="block mt-3 ml-6">
              <div className="opacity-60">주관/주최</div>
              {host}
            </div>
            <div className="block mt-3 ml-8">
              <div className="opacity-60">대회상금</div>
              {award}
            </div>
            <div className="block mt-3 ml-8">
              <div className="opacity-60">대회기간</div>
              <div>
                {period1} ~ {period2}
              </div>
            </div>
            <div className="block mt-3 ml-8">
              <div className="opacity-60">참가인원</div>
              {Participant}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Poster;
