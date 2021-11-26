/* This Sidebar requires Tailwind CSS v2.0+ */
import React from "react";
import tw from "twin.macro";

import { useNavigation } from "../utils/navigationProvider";
import ContentSidebarInline from "./contentSidebarInline";
import ContentSidebarVertical from "./contentSidebarVertical";
import Link from "./link";

function CustomSidebar({ backButton }) {
  if (!backButton) {
    return null;
  }
  return (
    <Link button iconLeft="left" to={backButton.link}>
      {backButton.text}
    </Link>
  );
}

export default function Sidebar({ inline, ...props }) {
  const { sub, sidebar } = useNavigation();
  if (!sub?.navItems && !sidebar) {
    return null;
  }
  return (
    <nav aria-label="Sidebar" {...props}>
      {sidebar ? (
        <CustomSidebar {...sidebar} />
      ) : inline ? (
        <ContentSidebarInline items={sub.navItems} />
      ) : (
        <ContentSidebarVertical items={sub.navItems} />
      )}
    </nav>
  );
}
