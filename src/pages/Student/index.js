import GithubCursor from "@components/GithubCursor";
import LoadingScreen from "@components/LoadingScreen";
import MouseContextProvider from "@context/MouseContext";
import { TransitionColorContext } from "@context/TransitionColorContext";
import useEffectOnce from "@hooks/useEffectOnce";
import useHandleAnimationScroll from "@hooks/useHandleAnimationScroll.js";
import { useContext } from "react";
import styled, { useTheme } from "styled-components";
import Banner from "./Banner";
import BlogSection from "./BlogSection";
import FooterSection from "./FooterSection";
import MemberSection from "./MemberSection";

function StudentPage() {
  const { handleAnimationStart, handleAnimationComplete } =
    useHandleAnimationScroll();
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();

  useEffectOnce(() => {
    transitionColorHandler(color.blue);
  });

  return (
    <>
      <Container>
        <Banner />
        <MouseContextProvider>
          <MemberSection />
          <GithubCursor />
        </MouseContextProvider>
        <PaddingSection />
        <BlogSection />
        <FooterSection />
      </Container>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default StudentPage;

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

const PaddingSection = styled.div`
  width: 100%;
  height: 30vh;

  background-color: transparent;
`;