/* eslint-disable camelcase */

import data from './result.json'
import { prepareInformation } from './lib'

type Coin = {
  network: string,
  ticker: string,
  title?: string,
  regex_address?:string,
  regex_extra_id?: string,
  extra_id_title?: string,
  url_block?: string,
  url_address?: string,
  is_token: boolean,
  launch_data?: string,
  description?: string,
  web_site?: string,
  decimals_main: number,
  decimals_display?: number,
  smart_contract?: string,
  max_supply?: number,
  proof_type?: string,
  algorithm?: string,
  color?: string
}

const byContracts = {}
const byNetworks = {}
for (const coin of data) {
  if (coin.smart_contract) {
    const key = `${coin.network}${coin.smart_contract.toLowerCase()}`
    byContracts[key] = coin
  } else {
    const key = `${coin.ticker}${coin.network}`
    byNetworks[key] = coin
  }
}

export function getCryptoCurrencyData (
  { ticker, network, contract }: { ticker?: string, network: string, contract?: string }
): Coin {
  if (contract && byContracts[contract.toLowerCase()]) {
    const key = `${network}${contract.toLowerCase()}`
    return prepareInformation(byContracts[key])
  }
  const key = `${ticker}${network}`
  return prepareInformation(byNetworks[key])
}
