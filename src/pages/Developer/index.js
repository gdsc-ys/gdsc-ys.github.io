import LoadingScreen from "@components/LoadingScreen";
import { TransitionColorContext } from "@context/TransitionColorContext";
import useEffectOnce from "@hooks/useEffectOnce";
import useHandleAnimationScroll from "@hooks/useHandleAnimationScroll.js";
import { useContext } from "react";
import styled, { useTheme } from "styled-components";
import Banner from "./Banner";
import FooterSection from "./FooterSection";
import Introduction from "./Introduction";
import DevRelSection from "./JamSection/DevRel";
import FSSection from "./JamSection/FS";
import MLSection from "./JamSection/ML";
import MobileSection from "./JamSection/Mobile";
import ServerSection from "./JamSection/Server";
import WebSection from "./JamSection/Web";
import SectionIntro from "./SectionIntro";

function DeveloperPage() {
  const { handleAnimationStart, handleAnimationComplete } =
    useHandleAnimationScroll();

  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();

  useEffectOnce(() => {
    transitionColorHandler(color.green);
  });

  return (
    <>
      <Container>
        <Banner />
        <Introduction />
        <SectionIntro />
        <WebSection />
        <ServerSection />
        <MobileSection />
        <MLSection />
        <FSSection />
        <DevRelSection />
        <FooterSection />
      </Container>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default DeveloperPage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: "Google Sans", sans-serif;
  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
  background-color: ${(props) => props.theme.backgroundColor.white};
`;