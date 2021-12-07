import { kebabCase } from "lodash";

export default function urlSafe(str) {
  return kebabCase(encodeURI(str.toLocaleLowerCase()));
}
