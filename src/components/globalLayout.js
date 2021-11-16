import React from "react";
import "twin.macro";

import GlobalStyles from "../utils/globalStyles";
import { NavigationProvider } from "../utils/navigationProvider";
import { ThemeProvider } from "../utils/themeProvider";

import Footer from "./footer";
import Header from "./header";
import Seo from "./seo";

export default function GlobalLayout({ children, ...props }) {
  // TODO deal with SEO
  return (
    <ThemeProvider>
      <NavigationProvider {...props}>
        <Seo {...props} />
        <GlobalStyles />
        <div tw="h-screen flex flex-col">
          <Header />
          <main tw="flex-1">
            <div tw="pt-16">{children}</div>
          </main>
          <Footer />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}
