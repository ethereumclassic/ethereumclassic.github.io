import { kebabCase } from "lodash";

export default function urlSafe(str) {
  return encodeURI(kebabCase(str.toLocaleLowerCase()));
}
