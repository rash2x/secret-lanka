import Head from 'next/head';
import Image from 'next/image';
import {Button, IconButton, Typography} from "@mui/material";
import styled from "@emotion/styled";

const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const PageBackground = styled.div`
  background: #000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  img {
    opacity: 0.75;
    z-index: 1;
  }
  
  video {
    opacity: 0.7;
  }
`;

const PageContent = styled.div`
  z-index: 1;
  flex: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 0 100px;
  position: relative;

  ${props => props.theme.breakpoints.down('md')} {
    padding: 0 24px;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Logo = styled.div`
  position: relative;
  z-index: 1;
  margin-left: 32px;
  margin-top: 24px;
  
  display: flex;
  align-items: center;
`;

const LogoText = styled.div`
  margin-left: 16px;
  margin-top: 2px;
  max-width: 180px;
  
  opacity: 0.8;
  font-size: 0.875rem;
  letter-spacing: -1px;
  line-height: 1.3;
`;

const Title = styled(Typography)`
  text-transform: uppercase;
  font-family: "Moniqa Cond Display", sans-serif;
  font-size: 6.25rem;
  line-height: 1;
  letter-spacing: 3px;

  ${props => props.theme.breakpoints.down('md')} {
    font-size: 4rem;
  }
`;

const PlaceTitle = styled(Typography)`
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Attributes = styled(Typography)`
  margin-top: 8px;
  display: flex;
  
  span + span:before {
    content: '·';
    font-size: 1rem;
    display: inline;
    margin: 0 16px;
  }
`;

const Actions = styled.div`
  display: flex;
  margin-top: 32px;
  
  > * + * {
    margin-left: 16px;
  }

  ${props => props.theme.breakpoints.down('md')} {
    flex-direction: column;

    > * + * {
      margin-left: 0;
      margin-top: 8px;
    }
  }
`;

const Play = styled(IconButton)`
  z-index: 1;
  
  margin-left: 16px;
  margin-bottom: 22px;
  width: 80px;
  height: 80px;
  padding: 0;
  
  img {
    opacity: 0.25;
    transition: ${props => props.theme.transitions.create(['opacity'])};
  }
  &:hover img {
    opacity: 1;
  }

  ${props => props.theme.breakpoints.down('md')} {
    margin-left: 0;
    padding: 2px;
    width: 48px;
    height: 48px;

    position: absolute;
    top: -64px;
    left: 0;
  }
`;

const Footer = styled.footer`
  position: relative;
  z-index: 1;
  justify-content: space-between;
  padding: 24px 32px;
`;

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Ретрит-туры по Шри-Ланке - Secret Lanka</title>
      </Head>

      <PageBackground>
        <video id="background-video" autoPlay loop muted poster="/bg-hantana.jpg">
          <source src="/video-hantana.mp4" type="video/mp4" />
        </video>
      </PageBackground>

      <Logo>
        <Image src="/logo.svg" alt="" width="80px" height="42px" />
        <LogoText>
          Ретрит-туры по Шри-Ланке с мастерами и практиками
        </LogoText>
      </Logo>

      <PageContent>
        <Content>
          <PlaceTitle>Ретрит-тур, Канди</PlaceTitle>
          <Title variant="h1">
            Хребет Хантаны
            <Play size="extraSmall">
              <Image src="/play.svg" alt="" width="60px" height="60px" />
            </Play>
          </Title>
          <Attributes variant="body2">
            <span>21 день</span>
            <span>3 локации</span>
            <span>1 мастер</span>
          </Attributes>
          <Actions>
            <Button variant="outlined">Подробнее о туре</Button>
            <Button variant="outlined" href="tel:+79216322333" target="_blank">
              <span>+79216322333</span>
            </Button>
          </Actions>
        </Content>
      </PageContent>
      <Footer>
        <Typography color="textSecondary" variant="body2">Все материалы принадлежат Secret Lanka © 2022</Typography>
      </Footer>
    </Page>
  )
}
