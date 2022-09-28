import Head from 'next/head';
import Image from 'next/future/image';
import {Button, CssBaseline, Typography} from "@mui/material";
import styled from "@emotion/styled";

const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const PageBackground = styled(Image)`
  background: url('/bg-hantana.webp') no-repeat center;

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  
  padding: 28px 32px 0;
`;
const Logo = styled.div`
  background: url('/logo.svg') no-repeat;
  width: 170px;
  height: 32px;
`;

const PhoneButton = styled(Button)`
  height: 32px;
`;

const Tour = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin-bottom: 40px;
`;

const Title = styled(Typography)`
  margin: 32px 0 0;
  font-family: "Moniqa Cond Display", sans-serif;
  font-size: 16rem;
  line-height: 0.8;
`;

const PlaceTitle = styled(Typography)`
  font-family: "Moniqa Med Paragraph", sans-serif;
  font-size: 2rem;
`;

const Subtitle = styled(Typography)`
  font-family: "Moniqa Med Paragraph", sans-serif;
  font-size: 3rem;
`;

const ButtonDetails = styled(Button)`
  margin-top: 80px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
`;

export default function Home() {
  return (
    <Page>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans&display=swap" rel="stylesheet" />
      </Head>
      <Header>
        <Logo />
        <div className="contact flex">
          <PhoneButton href="tel:+79216322333" target="_blank">
            <img src="/contact-icons.svg" alt="" />
            <span>+79216322333</span>
          </PhoneButton>
        </div>
      </Header>
      <Tour>
        <PlaceTitle>Шри-Ланка, Канди</PlaceTitle>
        <Title variant="h1">ХРЕБЕТ ХАНТАНА</Title>
        <Subtitle>3 дневный ретрит-тур с Мастером</Subtitle>
        <ButtonDetails variant="outlined" size="large">Подробнее о туре</ButtonDetails>
      </Tour>
      <Footer>
        <Typography color="textSecondary" variant="body2">Все материалы принадлежат Secret Lanka © 2022</Typography>
        <Typography color="textSecondary" variant="body2">Лицензия #324000 на туристическую деятельность</Typography>
      </Footer>
      <PageBackground />
    </Page>
  )
}
