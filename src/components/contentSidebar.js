/* This Sidebar requires Tailwind CSS v2.0+ */
import React from "react";
import "twin.macro";

import { useNavigation } from "../utils/navigationProvider";
import ContentSidebarInline from "./contentSidebarInline";
import ContentSidebarVertical from "./contentSidebarVertical";

export default function Sidebar({ inline, ...props }) {
  const { sub } = useNavigation();
  if (!sub?.navItems) {
    return null;
  }
  return (
    <nav aria-label="Sidebar" {...props}>
      {inline ? (
        <ContentSidebarInline items={sub.navItems} />
      ) : (
        <ContentSidebarVertical items={sub.navItems} />
      )}
    </nav>
  );
}
