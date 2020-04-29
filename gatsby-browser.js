exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.state && location.state.noScroll) {
    return false;
  }
  return true;
};

function scrollToAnchor(location, mainNavHeight = 0) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`);
    if (item) {
      window.scrollTo({ top: item.offsetTop - mainNavHeight });
    }
  }
  return true;
}

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);
