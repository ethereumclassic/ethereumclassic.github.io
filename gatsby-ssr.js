export { wrapPageElement } from "./gatsby-browser";

export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({ className: "light" });
}
