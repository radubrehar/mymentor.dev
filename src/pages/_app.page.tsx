import "../styles/globals.scss";

import { ThemeProvider } from "emotion-theming";
import theme from "../components/theme";

import Constrained from "../components/Constrained";
import Header from "../components/Header";

import styled from "@emotion/styled";
import { width, space, color } from "styled-system";

const Footer = styled("footer")(space, width, color);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header siteTitle={"Your developer mentor"} />
        <div id="wrapper">
          <main style={{ flex: 1 }}>
            <Component {...pageProps} />
          </main>
          <Constrained>
            <Footer p={3}>
              © {new Date().getFullYear()}, Built with ❤️ & React, in
              Transylvania.
            </Footer>
          </Constrained>
        </div>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
