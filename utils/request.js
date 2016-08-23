const Promise = require('es6-promise').Promise

export function get (url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.responseText))
      } else {
        reject(request)
      }
    }
    request.onerror = () => {
      reject(new Error('Connection Error'))
    }
    request.send()
  })
}
