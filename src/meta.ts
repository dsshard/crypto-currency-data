/* eslint-disable camelcase */

import { Params, SharedData } from './index'

import { prepareInformation, prepareList } from './lib'
import data from './information-meta.json'

export interface Meta extends SharedData {
  desc?: string,
  launch_data?: string,
  description?: string,
  web_site?: string,
  max_supply?: number,
  proof_type?: string,
  algorithm?: string
}

const { byFamily, byContracts } = prepareList(data)

export function findCryptoCurrencyMeta ({ ticker, family, contract }: Params): Meta | null {
  let key = `${family}${contract?.toLowerCase()}`
  if (contract && byContracts[key]) {
    return prepareInformation(byContracts[key])
  }
  if (!ticker) return null
  key = `${ticker}${family}`
  if (byFamily[key]) {
    return prepareInformation(byFamily[key])
  }
  return null
}
