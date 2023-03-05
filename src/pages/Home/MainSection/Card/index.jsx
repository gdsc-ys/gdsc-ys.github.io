import DelayedLink from '@components/DelayedLink';
import { TRANSITION_DURATION } from '@constants/constants';
import { TransitionColorContext } from '@context/TransitionColorContext';
import { useContext } from 'react';
import styled from 'styled-components';

function Card({ color, linkTarget, shape, leftText, rightText }) {
  const { transitionColorHandler } = useContext(TransitionColorContext);

  const handleCardClick = () => {
    transitionColorHandler(color);
  };

  return (
    <DelayedLink to={linkTarget} delay={TRANSITION_DURATION}>
      <Container color={color} onClick={handleCardClick}>
        <ShapeWrapper>{shape}</ShapeWrapper>
        <TextWrapper>
          <LeftText>{leftText}</LeftText>
          <RightText>{rightText}</RightText>
        </TextWrapper>
      </Container>
    </DelayedLink>
  );
}

export default Card;

const Container = styled.figure`
  width: 18vw;
  height: 45vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: 1px solid ${(props) => props.theme.lightColor.light};

  cursor: pointer;
`;

const ShapeWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 0 5% 3%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LeftText = styled.span`
  color: ${(props) => props.theme.backgroundColor.white};
  font-size: 40px;
`;

const RightText = styled.span`
  color: ${(props) => props.theme.backgroundColor.white};
  font-size: 16px;
`;