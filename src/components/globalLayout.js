import React from "react";
import "twin.macro";

import GlobalStyles from "../utils/globalStyles";
import { NavigationProvider } from "../utils/navigationProvider";
import { ThemeProvider } from "../utils/themeProvider";

import Footer from "./footer";
import Header from "./header";
import Json from "./json";
import Seo from "./seo";
import Warning from "./warning";

export default function GlobalLayout({ children, ...props }) {
  return (
    <ThemeProvider>
      <NavigationProvider {...props}>
        <Seo {...props} />
        <GlobalStyles />
        <div tw="h-screen flex flex-col">
          <Header />
          <main tw="flex-1">
            <div tw="pt-16">
              <Warning />
              {children}
              {/* <Json {...props} /> */}
            </div>
          </main>
          <Footer />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}
