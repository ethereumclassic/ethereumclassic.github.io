import React from "react";
import "twin.macro";

import GlobalStyles from "../utils/globalStyles";
import { NavigationProvider } from "../utils/navigationProvider";
import { RedirectsProvider } from "../utils/redirectsProvider";
import { ThemeProvider } from "../utils/themeProvider";

import Footer from "./footer";
import Header from "./header";
import Json from "./json";
import Seo from "./seo";
import Announcement from "./announcement";

export default function GlobalLayout({ children, ...props }) {
  return (
    <RedirectsProvider>
      <NavigationProvider {...props}>
        <ThemeProvider>
          <Seo {...props} />
          <GlobalStyles />
          <div tw="h-screen flex flex-col">
            <Header />
            <main tw="flex-1">
              <div tw="pt-16">
                <Announcement />
                {children}
                {/* <Json {...props} /> */}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </NavigationProvider>
    </RedirectsProvider>
  );
}
