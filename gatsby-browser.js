exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.state && location.state.languageChange) {
    return false;
  }
  return true;
};
