exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.state && location.state.noScroll) {
    return false;
  }
  return true;
};
