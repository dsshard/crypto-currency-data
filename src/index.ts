/* eslint-disable camelcase */

import data from './information-coins.json'
import { prepareInformation, prepareList } from './lib'

export type Params = {
  ticker?: string,
  family: string,
  contract?: string
}

export type SharedData = {
  family: string,
  ticker: string,
  title: string,
  regex_address:string,
  regex_extra_id?: string,
  extra_id_title?: string,
  url_block?: string,
  url_address?: string,
  url_tx?: string,
  contract?: string
}

export interface Coin extends SharedData {
  id: number,
  color?: string
}

const { byFamily, byContracts, byIds } = prepareList(data)

export function getAllByFamily (family: string): Coin[] {
  return Object.values(byFamily).filter((el: Coin) => el.family === family) as Coin[] || []
}

export function getAllCoins () {
  return Object.values(byFamily).filter((el: Coin) => el.family === el.ticker) as Coin[]
}

export function findCryptoCurrencyData ({ ticker, family, contract }: Params): Coin | null {
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

export function getCryptoCurrencyDataById (id: number): Coin {
  return byIds[id] || null
}

export function getAllByTicker (ticker: string): Coin[] {
  return (data as Coin[]).filter((item) => item.ticker === ticker)
}

export function validateCryptoAddress (address: string, params: Params | Coin): boolean | null {
  if (!params) return null
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
  if (!params) return null
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

