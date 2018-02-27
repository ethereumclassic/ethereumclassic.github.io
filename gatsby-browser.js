import ReactGA from 'react-ga'
ReactGA.initialize('UA-114790896-1')

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname)
}
