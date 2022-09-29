import Document, {Html, Head, Main, NextScript} from 'next/document';
import {css, Global} from "@emotion/react";

const GlobalStyles = ({children}) => (
  <Global styles={css`
    @font-face {
      font-family: 'Moniqa Cond Display';
      src: url('/styles/fonts/Moniqa-CondensedDisplay.woff2') format('woff2'),
      url('/styles/fonts/Moniqa-CondensedDisplay.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Moniqa Med Paragraph';
      src: url('/styles/fonts/Moniqa-MediumParagraph.woff2') format('woff2'),
      url('/styles/fonts/Moniqa-MediumParagraph.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }


  `}>{children}</Global>
)

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyles/>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument