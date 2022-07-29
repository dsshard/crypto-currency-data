/* eslint-disable camelcase */

import data from './result.json'
import { prepareInformation } from './lib'

type Params = {
  ticker?: string,
  network: string,
  contract?: string
}

export type Coin = {
  id: number,
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
const byIds = {}

for (const coin of data) {
  byIds[coin.id] = coin
  if (coin.smart_contract) {
    const key = `${coin.network}${coin.smart_contract.toLowerCase()}`
    byContracts[key] = coin
  } else {
    const key = `${coin.ticker}${coin.network}`
    byNetworks[key] = coin
  }
}

export function findCryptoCurrencyData (
  { ticker, network, contract }: Params
): Coin | null {
  if (contract && byContracts[contract.toLowerCase()]) {
    const key = `${network}${contract.toLowerCase()}`
    return prepareInformation(byContracts[key])
  }
  const key = `${ticker}${network}`
  return prepareInformation(byNetworks[key])
}

export function getCryptoCurrencyDataById (id: number): Coin {
  return byIds[id] || null
}

export function validateCryptoAddress (address: string, params: Params | Coin): boolean | null {
  if (typeof (params as Coin)?.regex_address !== 'undefined') {
    const reg = new RegExp((params as Coin).regex_address)
    return reg.test(address)
  }
  const coin = findCryptoCurrencyData(params)
  if (coin) {
    if (!coin.regex_extra_id) return null
    const reg = new RegExp(coin.regex_address)
    return reg.test(address)
  }
  return null
}

export function validateCryptoExtraId (extraId: string, params: Params | Coin) {
  if (typeof (params as Coin)?.regex_extra_id !== 'undefined') {
    const reg = new RegExp((params as Coin).regex_extra_id)
    return reg.test(extraId)
  }
  const coin = findCryptoCurrencyData(params)
  if (coin) {
    if (!coin.regex_extra_id) return null
    const reg = new RegExp(coin.regex_extra_id)
    return reg.test(extraId)
  }
  return null
}

export function getCryptoCoinDecimals (params: Params | Coin): number {
  if (typeof (params as Coin)?.decimals_main !== 'undefined') {
    return (params as Coin).decimals_main
  }
  const coin = findCryptoCurrencyData(params)
  return coin.decimals_main
}
