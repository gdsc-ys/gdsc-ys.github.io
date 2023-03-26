import { MouseContext } from '@context/MouseContext';
import useHover from '@hooks/useHover';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { MEDIA_QUERIES } from '@styles/media';
import { memo, useCallback, useContext } from 'react';
import { MouseParallaxChild } from 'react-parallax-mouse';
import TextTransition from 'react-text-transition';
import styled from 'styled-components';

function MemberCard({ upperLetter, lowerLetter, githubID }) {
  const [hoverRef, isHovered] = useHover();
  const { cursorChangeHandler } = useContext(MouseContext);
  const isMobile = useMediaQuery(MEDIA_QUERIES.MOBILE);

  const names = [lowerLetter, `@${githubID}`];

  const cursorChangeGithubHandler = useCallback(() => {
    cursorChangeHandler('Github');
  }, [cursorChangeHandler]);

  const cursorChangeEmptyHandler = useCallback(() => {
    cursorChangeHandler('');
  }, [cursorChangeHandler]);

  return (
    <Container
      ref={hoverRef}
      href={`https://github.com/${githubID}`}
      target="_blank"
      rel="noreferrer noopener nofollow"
      onMouseEnter={cursorChangeGithubHandler}
      onMouseLeave={cursorChangeEmptyHandler}
    >
      <UpperContainer>
        <UpperSpan>{upperLetter}</UpperSpan>
      </UpperContainer>
      <LowerContainer>
        <LowerSpan>
          <MouseParallaxChild
            style={{
              paddingRight: isMobile ? '20px' : '50px',
            }}
          >
            <TextTransition inline overflow>
              {names[isHovered | 0]}
            </TextTransition>
          </MouseParallaxChild>
        </LowerSpan>
      </LowerContainer>
    </Container>
  );
}

export default memo(MemberCard);

const Container = styled.a`
  width: 100%;
  height: 200px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;

  border-radius: 20px;

  user-select: none;
  cursor: none;
`;

const UpperContainer = styled.div`
  width: 100%;
  padding-right: 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  ${({ theme }) => theme.mobile`
    padding-right: 20px;
  `}
`;

const UpperSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: ${(props) => props.theme.contrast.red};

  ${({ theme }) => theme.mobile`
    font-size: 6px;
    line-height: 20px;
  `}
`;

const LowerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LowerSpan = styled.span`
  display: inline-block;

  font-size: 4vw;
  font-weight: 900;
  letter-spacing: 2px;
  text-overflow: ellipsis;
  text-transform: uppercase;

  ${({ theme }) => theme.mobile`
    font-size: 2px;
    line-height: 20px;

    padding-right: 1vw;
  `}
`;