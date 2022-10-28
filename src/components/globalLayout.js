import React from "react";
import "twin.macro";

import { NavigationProvider } from "../utils/navigationProvider";

import Footer from "./footer";
import Header from "./header";
import Seo from "./seo";
import Announcement from "./announcement";
import Json from "./json";

export default function GlobalLayout({ children, ...props }) {
  return (
    <NavigationProvider {...props}>
      <Seo {...props} />
      <div tw="flex flex-col min-h-screen">
        <Header />
        <main tw="flex-1">
          <Announcement />
          {/* <Json>{props}</Json> */}
          {children}
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
}
