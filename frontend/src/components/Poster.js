import React, { useState } from 'react';

function Poster({ poster }) {
  const { photo, title, explanation, caption, state, award } = poster;

  return (
    <>
      <div className="bg-white flex ">
        <div className="m-5  w-80 h-80  rounded-lg shadow-md">
          <img src={photo} alt={caption} className="h-40 rounded-t-md" />
          <div>{state}</div>
          <div className="flex m-3">{title}</div>
          <div className="flex m-3">{explanation}</div>
          <div className="flex m-3">{award}</div>
        </div>
      </div>
    </>
  );
}
export default Poster;
