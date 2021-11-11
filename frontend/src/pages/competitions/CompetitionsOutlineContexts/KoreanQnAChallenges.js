import React from 'react';
import styled from 'styled-components';
import submit from '../../../../src/assets/해커톤_참가신청서.hwp';
import aiposter from '../../../../src/assets/AI_challenges_poster.jpeg';

function KoreanQnAChallenges({ koreanQnAChallenges }) {
  // const { title, explanation } = koreanQnAChallenges;
  const StyledUl = styled.ul``;
  const Styledli = styled.li``;
  return (
    <>
      <div className="mb-12">
        <div className="mt-6 ml-4 text-lg">
          2021 한국어 질의응답 AI 경진대회: 비디오 네러티브 질의응답 태스크
          {/* {title} */}
        </div>
        <div className="mt-2 ml-4 text-base opacity-60">
          {/* {explanation} */}
        </div>

        <img className="mt-4 ml-16 w-2/6" src={aiposter} alt="" />

        <div className="mt-8 mx-4">
          <p className="mb-2 text-lg">1. 개요</p>{' '}
          <p>
            비디오 네러티브 질의응답이란 영상(4~5초)에 대한 질문이 주어졌을 때
            해당 질문에 대한 답을 보기에서 찾는 태스크로서, 기존의 이미지에 대한
            질문에 답하는 VQA 문제에 시간축이 추가된 태스크임. 본 태스크는
            영상정보와 자연어 정보에 대한 이해를 바탕으로 각각 다른 modality
            정보를 활용하여 학습하여, 주어진 자연어 질문에 대한 가장 적합한 답을
            찾는 문제임.
          </p>{' '}
          <p>
            {' '}
            예를 들어, 빨간색 유니폼을 입은 선수가 오른쪽으로 뛰는 영상에 대해
            다음과 같은 질문과 보기가 주어짐.
          </p>
          <StyledUl>
            <Styledli className="list-inside mt-4 list-disc">
              {' '}
              질문: 오른쪽으로 뛰는 사람이 어떤 옷을 입었습니까?
            </Styledli>
            <Styledli className="list-inside list-disc">
              보기: 1. 한복, 2. 소방복, 3. 운동복, 4. 경찰복, 5. 수술복
            </Styledli>
          </StyledUl>
          <p className="mt-4">주최</p>
          <StyledUl>
            <Styledli className="list-inside list-disc">
              {' '}
              과학기술정보통신부{' '}
            </Styledli>
            <Styledli className="list-inside list-disc">
              한국지능정보사회진흥원(NIA)
            </Styledli>
          </StyledUl>
          <p className="mt-4">주관</p>
          <StyledUl>
            <Styledli className="list-inside list-disc">
              {' '}
              (주)써로마인드{' '}
            </Styledli>
            <Styledli className="list-inside list-disc">KAIST</Styledli>
            <Styledli className="list-inside list-disc">(주)테디썸</Styledli>
            <Styledli className="list-inside list-disc">
              (주)유클리드소프트
            </Styledli>
          </StyledUl>
          <p className="mt-4 mb-2">
            본 경진대회는 과학기술정보통신부가 주관하고,
            한국지능정보사회진흥원이 지원하는 인공지능 학습용 데이터 구축 사업 -
            비디오 네러티브 질의응답 데이터 과제의 지원을 받았습니다.
          </p>
          <hr />
          <p className="mt-4 mb-2 text-lg">2. 과제</p>{' '}
          <StyledUl>
            <Styledli className="list-inside list-disc">
              {' '}
              주어진 영상, 영상요약문, 질문을 활용하여, 보기의 정답 후보 중 가장
              적합한 정답을 선택하는 문제
            </Styledli>
            <Styledli className="list-inside list-disc mb-2">
              평가 지표에는 accuracy가 활용됩니다
            </Styledli>
          </StyledUl>
          <hr />
          <p className="mt-4 mb-2 text-lg">3. 유의사항</p>{' '}
          <StyledUl>
            <Styledli className="list-inside list-disc mb-2">
              {' '}
              본 경진대회에 참가신청이 수락된 경우에만 데이터가 제공되며, 상기
              데이터는 본 대회의 참가 목적으로만 사용할 수 있으며 다른
              목적으로는 사용 불가함
            </Styledli>
          </StyledUl>
          <hr />
          <p className="mt-4 mb-2 text-lg">4. 참가신청</p>{' '}
          <StyledUl>
            <Styledli className="list-inside list-disc mb-2">
              {' '}
              *
              <a className="underline text-blue-500 " href={submit} download>
                첨부
              </a>
              된 참가 신청서를 작성하여 전자우편(jiseong@kaist.ac.kr)으로 제출
            </Styledli>
          </StyledUl>
          <hr />
        </div>
      </div>
    </>
  );
}

export default KoreanQnAChallenges;
