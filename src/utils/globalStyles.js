import React from "react";
import { Global, css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  .light {
    --primary-darkest: ${theme`colors.green.900`};
    --primary-darker: ${theme`colors.green.800`};
    --primary-dark: ${theme`colors.green.700`};
    --primary-neutral: ${theme`colors.green.400`};
    --primary-light: ${theme`colors.green.300`};
    --primary-lighter: ${theme`colors.green.100`};
    --primary-lightest: ${theme`colors.green.50`};

    --secondary-darkest: ${theme`colors.indigo.900`};
    --secondary-darker: ${theme`colors.indigo.800`};
    --secondary-dark: ${theme`colors.indigo.700`};
    --secondary-neutral: ${theme`colors.indigo.400`};
    --secondary-light: ${theme`colors.indigo.300`};
    --secondary-lighter: ${theme`colors.indigo.100`};
    --secondary-lightest: ${theme`colors.indigo.50`};

    --shade-darkest: ${theme`colors.gray.950`};
    --shade-darker: ${theme`colors.gray.900`};
    --shade-dark: ${theme`colors.gray.700`};
    --shade-neutral: ${theme`colors.gray.600`};
    --shade-light: ${theme`colors.gray.400`};
    --shade-lighter: ${theme`colors.gray.200`};
    --shade-lightest: ${theme`colors.gray.100`};

    --backdrop-dark: ${theme`colors.gray.50`};
    --backdrop-light: ${theme`colors.white`};
  }
  .dark {
    --primary-darkest: ${theme`colors.green.50`};
    --primary-darker: ${theme`colors.green.100`};
    --primary-dark: ${theme`colors.green.200`};
    --primary-neutral: ${theme`colors.green.400`};
    --primary-light: ${theme`colors.green.600`};
    --primary-lighter: ${theme`colors.green.700`};
    --primary-lightest: ${theme`colors.green.900`};

    --secondary-darkest: ${theme`colors.indigo.50`};
    --secondary-darker: ${theme`colors.indigo.100`};
    --secondary-dark: ${theme`colors.indigo.300`};
    --secondary-neutral: ${theme`colors.indigo.500`};
    --secondary-light: ${theme`colors.indigo.600`};
    --secondary-lighter: ${theme`colors.indigo.700`};
    --secondary-lightest: ${theme`colors.indigo.800`};

    --shade-darkest: ${theme`colors.gray.50`};
    --shade-darker: ${theme`colors.gray.100`};
    --shade-dark: ${theme`colors.gray.200`};
    --shade-neutral: ${theme`colors.gray.400`};
    --shade-light: ${theme`colors.gray.500`};
    --shade-lighter: ${theme`colors.gray.700`};
    --shade-lightest: ${theme`colors.gray.800`};

    --backdrop-dark: ${theme`colors.gray.900`};
    --backdrop-light: ${theme`colors.gray.950`};
  }

  body {
    ${tw`bg-backdrop-dark text-shade-darkest`}
    -webkit-tap-highlight-color: var(--primary-light);
  }

  :target:before {
    content: "";
    display: block;
    height: 5rem;
    margin: -5rem 0 0;
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
