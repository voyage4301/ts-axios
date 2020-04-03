import { AxiosRequestConfig } from './types'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}

const methodsNodata = ['delete', 'get', 'head', 'options']

methodsNodata.forEach(method => {
  defaults.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'catch']

methodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
