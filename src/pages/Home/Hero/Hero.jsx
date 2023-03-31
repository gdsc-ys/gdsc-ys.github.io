import MainFooter from '@components/Footer/MainFooter';
import MainHeader from '@components/Header/MainHeader';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { MEDIA_QUERIES } from '@styles/media';
import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';

import LogoSection from './LogoSection';
import NavigationSection from './NavigationSection';
import PaddingSection from './PaddingSection';

const GDSC_PAGES = ['/google', '/developer', '/student', '/clubs'];

function Hero() {
  const isSmallerLaptop = useMediaQuery(MEDIA_QUERIES.LAPTOP);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!scroll) return;

    const prevRoute = localStorage.getItem('prev') ?? '';

    if (GDSC_PAGES.includes(prevRoute)) {
      if (isSmallerLaptop) {
        scroll.scrollTo('#home-container-mainsection', { duration: 0, disableLerp: false });
        return;
      }

      scroll.scrollTo('bottom', { duration: 0, disableLerp: false });
    }
  }, [scroll]);

  return (
    <MainContainer data-scroll-section>
      <MainHeader />
      <LogoSection />
      <NavigationSection />
      <PaddingSection />
      <MainFooter />
    </MainContainer>
  );
}

export default Hero;

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1000;

  background-color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;