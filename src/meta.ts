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

const { byNetworks, byContracts } = prepareList(data)

export function findCryptoCurrencyMeta ({ ticker, network, contract }: Params): Meta | null {
  let key = `${network}${contract?.toLowerCase()}`
  if (contract && byContracts[key]) {
    return prepareInformation(byContracts[key])
  }
  if (!ticker) return null
  key = `${ticker}${network}`
  return prepareInformation(byNetworks[key])
}
