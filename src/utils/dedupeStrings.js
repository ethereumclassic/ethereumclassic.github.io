export default function dedupeStrings(author = "", source = "", joiner = ", ") {
  return author === source
    ? author
    : [author, source].filter((i) => i).join(joiner);
}
