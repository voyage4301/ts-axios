import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromURL(config)
}

function transfromURL(config: AxiosRequestConfig): string {
  const { url, param } = config
  return buildURL(url, param)
}

export default axios
