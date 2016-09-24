import ReactGA from 'react-ga'
ReactGA.initialize('UA-84671363-1')

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname)
}
