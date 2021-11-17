import React from 'react';
import styled from 'styled-components';
import kqcimg from '../../../assets/koreanQnAChallenges.png';
import nia from '../../../../src/assets/NIA.jpg';
import kaist from '../../../../src/assets/한국판뉴딜.png';
import sit from '../../../../src/assets/과학기술정보통신부.jpg';

function DatasetContexts({ DatasetContexts }) {
  const StyledUl = styled.ul``;
  const Styledli = styled.li``;
  const lt = '<';
  const gt = '>';
  return (
    <>
      <div className="mb-12">
        <div className="mt-6 ml-4 text-lg">데이터셋 설명</div>
        <div className="mt-6 mx-4">
          <StyledUl className="mb-2">
            <Styledli className="list-inside list-disc mb-1">
              {' '}
              예능/교양, 스포츠, 생활/안전 3가지 카테고리에 속하는 방송 영상
              클립파일과 이에 매칭되는 JSON파일로 구성됨
            </Styledli>
            <Styledli className="list-inside list-disc mb-1">
              JSON 내 어노테이션된 정보는 사람이 영상을 육안으로 확인하고
              2~3문장으로 요약한 '요약문' 텍스트와, 영상당 2~4쌍 매칭된
              '질의응답' 텍스트, 그리고 그 외 상황, 장소, 감정 등의 메타데이터가
              포함
            </Styledli>
            <Styledli className="list-inside list-disc mb-1">
              대본이 없는 데이터의 경우 2개의 시각절 질의로 구성됨
            </Styledli>
            <Styledli className="list-inside list-disc mb-1">
              대본이 있는 데이터의 경우 2개의 시각적 질의와 2개의 맥락적 질의로
              구성됨
              <StyledUl className="list-inside ml-4 my-1">
                <Styledli className="list-inside list-decimal ">
                  맥락적 질의의 경우 대본을 활용하여 작성된 질의응답이 있을 수
                  있음(발화 내용 등)
                </Styledli>
                <Styledli className="list-inside list-decimal mb-1">
                  대본 내 텍스트가 아닌 화면상의 텍스트는 활용하지 않음
                </Styledli>
              </StyledUl>
            </Styledli>
          </StyledUl>
          <hr />
          <p className="mt-2">
            {' '}
            {lt}참고화면{gt}
          </p>
          <img src={kqcimg} alt="" />
          <div class="flex flex-wrap justify-around mt-10 text-center">
            <img class="w-32" src={sit} alt="" />
            <img class="w-32" src={nia} alt="" />
            <img class="w-32" src={kaist} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DatasetContexts;
