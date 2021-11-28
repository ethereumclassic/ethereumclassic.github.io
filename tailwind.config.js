module.exports = {
  purge: [],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  theme: {
    // actual colors defined in globalStyles.js
    extend: {
      colors: {
        gray: { 950: "#0b101a" },
        shade: {
          darkest: "var(--shade-darkest)",
          darker: "var(--shade-darker)",
          dark: "var(--shade-dark)",
          neutral: "var(--shade-neutral)",
          light: "var(--shade-light)",
          lighter: "var(--shade-lighter)",
          lightest: "var(--shade-lightest)",
        },
        primary: {
          darkest: "var(--primary-darkest)",
          darker: "var(--primary-darker)",
          dark: "var(--primary-dark)",
          neutral: "var(--primary-neutral)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
          lightest: "var(--primary-lightest)",
        },
        secondary: {
          darkest: "var(--secondary-darkest)",
          darker: "var(--secondary-darker)",
          dark: "var(--secondary-dark)",
          neutral: "var(--secondary-neutral)",
          light: "var(--secondary-light)",
          lighter: "var(--secondary-lighter)",
          lightest: "var(--secondary-lightest)",
        },
        backdrop: {
          dark: "var(--backdrop-dark)",
          light: "var(--backdrop-light)",
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              color: "var(--shade-neutral)",
              '[class~="lead"]': {
                color: "var(--shade-light)",
              },
              a: {
                color: "var(--shade-darkest)",
              },
              strong: {
                color: "var(--shade-darkest)",
              },
              "ol > li::before": {
                color: "var(--shade-neutral)",
              },
              "ul > li::before": {
                backgroundColor: "var(--shade-dark)",
              },
              hr: {
                borderColor: "var(--shade-ligher)",
              },
              blockquote: {
                color: "var(--shade-ligher)",
                borderLeftColor: "var(--shade-dark)",
              },
              h1: {
                color: "var(--shade-darkest)",
              },
              h2: {
                color: "var(--shade-darkest)",
              },
              h3: {
                color: "var(--shade-darkest)",
              },
              h4: {
                color: "var(--shade-darkest)",
              },
              "figure figcaption": {
                color: "var(--shade-neutral)",
              },
              code: {
                color: "var(--shade-darkest)",
                backgroundColor: "var(--shade-lighter)",
              },
              "a code": {
                color: "var(--shade-darkest)",
              },
              "pre code": {
                color: "var(--shade-darkest)",
              },
              pre: {
                color: "var(--shade-darkest)",
                backgroundColor: "var(--shade-lighter)",
              },
              thead: {
                color: "var(--shade-darkest)",
                borderBottomColor: "var(--shade-lighter)",
              },
              "tbody tr": {
                borderBottomColor: "var(--shade-lightest)",
              },
            },
          ],
        },
      }),
    },
  },
};
