exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.state.languageChange) {
    return false;
  }
  return true;
};
