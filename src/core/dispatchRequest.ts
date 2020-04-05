import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildURL, isAbsoluteUrl, combineURL } from '../helpers/url'
import { flattenHeaders } from '../helpers/headers'
import transform from '../core/transform'

function axios(config: AxiosRequestConfig): AxiosPromise {
  throwIFCancellationRequested(config)
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}
export default axios

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transform(config.data, config.headers, config.transformRequest)
  config.headers = flattenHeaders(config.headers, config.method!)
}

export function transformURL(config: AxiosRequestConfig): string {
  let { url, param, paramsSerializer, baseURL } = config

  if (baseURL && !isAbsoluteUrl(url!)) {
    url = combineURL(baseURL, url)
  }
  return buildURL(url!, param, paramsSerializer)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}

function throwIFCancellationRequested(config: AxiosRequestConfig): void {
  if (config.cancelToken) {
    config.cancelToken.throwIFRequested()
  }
}
