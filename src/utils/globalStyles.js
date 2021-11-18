import React from "react";
import { Global, css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  .light {
    --bg-primary: ${theme`colors.gray.100`};
    --bg-secondary: #f1f5f9;
    --text-primary: #475569;
    --text-secondary: #1e293b;
    --color-primary: #e11d48;
  }
  .dark {
    --bg-primary: ${theme`colors.gray.900`};
    --bg-secondary: #1e293b;
    --text-primary: #cbd5e1;
    --text-secondary: #ffffff;
    --color-primary: #2563eb;
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`bg-primary text-primary`}
  }

  html {
    scroll-behavior: smooth;
  }

  :target:before {
    content: "";
    display: block;
    height: 6rem;
    margin: -6rem 0 0;
  }
`;

export default function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
}
