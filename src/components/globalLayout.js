import React from "react";
import "twin.macro";

import { NavigationProvider } from "../utils/navigationProvider";

import Footer from "./footer";
import Header from "./header";
import Seo from "./seo";
import Announcement from "./announcement";

export default function GlobalLayout({ children, ...props }) {
  return (
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
  );
}
