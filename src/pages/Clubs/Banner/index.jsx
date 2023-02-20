import pattern from "@assets/images/terrainPattern1.png";
import { BannerTextAnimation } from "@components/Animation/BannerTextAnimation";
import DelayedLink from "@components/DelayedLink";
import { TRANSITION_DURATION } from "@constants/constants";
import styled from "styled-components";

function Banner() {
  const animationDelaySeconds = TRANSITION_DURATION * 0.001;

  return (
    <HeadingSection data-scroll-section>
      <TitleSection>
        <TitleWrapper
          data-scroll
          data-scroll-position="top"
          data-scroll-speed="-5"
        >
          <TitleSpan>Introducing</TitleSpan>
        </TitleWrapper>
        <DelayedLink to="/" delay={TRANSITION_DURATION}>
          <BackToMainButton
            data-scroll
            data-scroll-position="top"
            data-scroll-speed="5"
          >
            Back To Main
          </BackToMainButton>
        </DelayedLink>
      </TitleSection>
      <BodySection>
        <TextSection>
          <TextAnimationContainer delay={animationDelaySeconds}>
            <BodySpanLarge>Google</BodySpanLarge>
          </TextAnimationContainer>
          <TextAnimationContainer delay={animationDelaySeconds + 0.3}>
            <BodySpan>Yonsei Club</BodySpan>
          </TextAnimationContainer>
        </TextSection>
        <CanvasSection>
          <CanvasImage
            data-scroll
            data-scroll-position="top"
            data-scroll-speed="3"
            src={pattern}
            alt="Clubs"
          />
        </CanvasSection>
      </BodySection>
    </HeadingSection>
  );
}

export default Banner;

const HeadingSection = styled.div`
  width: 100%;
  height: 100vh;

  padding-bottom: 1vh;
  margin-bottom: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: "Google Sans";
`;

const BodySection = styled.div`
  width: 100%;
  flex-grow: 1;

  padding-bottom: 2vh;
  padding-left: 2vw;

  display: grid;
  grid-template-columns: 1fr 1.2fr;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const TextAnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translateY(100%) rotateX(-80deg);
  transform-origin: center top;
  transform-style: preserve-3d;

  animation-name: ${BannerTextAnimation};
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-fill-mode: forwards;
  animation-delay: ${(props) => `${props.delay}s`};

  user-select: none;
`;

const CanvasSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const CanvasImage = styled.img`
  height: 80vh;
`;

const BodySpanLarge = styled.span`
  display: inline-block;
  font-size: 12.5vw;
  font-weight: 500;

  line-height: 1.1;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const BodySpan = styled.span`
  display: inline-block;
  font-size: 6.3vw;
  font-weight: 400;

  line-height: 1.1;
  color: ${(props) => props.theme.backgroundColor.black};
`;

const TitleSection = styled.div`
  width: 100%;
  padding-top: 5vh;
  padding-left: 5vw;
  padding-right: 5vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 65px;

  padding: 20px 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${(props) => props.theme.backgroundColor.black};
  border-radius: 50px;

  background-color: ${(props) => props.theme.color.yellow};
`;

const TitleSpan = styled.h1`
  font-size: 28px;
`;

const BackToMainButton = styled.button`
  padding: 20px 36px;

  font-size: 16px;
  font-weight: 400;
  font-family: "Google Sans", sans-serif;

  border: none;
  background-color: ${(props) => props.theme.backgroundColor.white};

  cursor: pointer;
`;