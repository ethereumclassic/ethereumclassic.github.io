import React from "react";
import "twin.macro";

import { NavigationProvider } from "../utils/navigationProvider";
import { RedirectsProvider } from "../utils/redirectsProvider";

import Footer from "./footer";
import Header from "./header";
import Json from "./json";
import Seo from "./seo";
import Announcement from "./announcement";
import Lorem from "./lorem";

import { ThemeProvider } from "../utils/themeProvider";

export default function GlobalLayout({ children, ...props }) {
  return (
    <ThemeProvider>
      <RedirectsProvider>
        <NavigationProvider {...props}>
          <Seo {...props} />
          <Header />
          <div tw="flex flex-col">
            <main tw="flex-1">
              <Announcement />
              {children}
            </main>
            <Footer />
          </div>
        </NavigationProvider>
      </RedirectsProvider>
    </ThemeProvider>
  );
}
