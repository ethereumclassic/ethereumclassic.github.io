import React from "react";
import "twin.macro";

import { NavigationProvider } from "../utils/navigationProvider";
import { RedirectsProvider } from "../utils/redirectsProvider";

import Footer from "./footer";
import Header from "./header";
import Json from "./json";
import Seo from "./seo";
import Announcement from "./announcement";
import { ThemeProvider } from "../utils/themeProvider";

export default function GlobalLayout({ children, ...props }) {
  return (
    <ThemeProvider>
      <RedirectsProvider>
        <NavigationProvider {...props}>
          <Seo {...props} />
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
        </NavigationProvider>
      </RedirectsProvider>
    </ThemeProvider>
  );
}
