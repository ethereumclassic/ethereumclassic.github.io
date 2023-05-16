module.exports = {
  purge: [],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    // actual colors defined in globalStyles.js
    extend: {
      backgroundImage: {
        // for dark mode
        pulse:
          "radial-gradient(rgba(110, 231, 183, 0.95), rgba(110, 231, 183, 0.2) 9%, rgba(110, 231, 183, 0.06) 13%, rgba(110, 231, 183, 0) 50%)",
        // for light mode
        darkpulse:
          "radial-gradient(rgba(5, 150, 105, 0.4), rgba(5, 150, 105, 0.1) 10%, rgba(5, 150, 105, 0) 50%)",
      },
      fontFamily: {
        display: ["Poppins", "Helvetica", "sans-serif"],
      },
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
                borderColor: "var(--shade-lighter)",
              },
              blockquote: {
                color: "var(--shade-dark)",
                borderLeftColor: "var(--shade-lighter)",
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
                border: "none",
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
