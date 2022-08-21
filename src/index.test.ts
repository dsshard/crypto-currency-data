import { findCryptoCurrencyData, getAllByNetwork, getCryptoCurrencyDataById, validateCryptoAddress } from './index'

import data from './information-coins.json'

describe('Index', () => {
  test('validate element', () => {
    const el = getCryptoCurrencyDataById(1)
    expect(el.id === 1).toBe(true)
  })

  test('validate element', () => {
    const el = getCryptoCurrencyDataById(2858)
    expect(el.network === 'bsc').toBe(true)
  })

  test('validate element', () => {
    const el = findCryptoCurrencyData({ ticker: 'usdt', network: 'eth' })
    expect(el.contract === '0xdAC17F958D2ee523a2206206994597C13D831ec7')
  })

  test('unique contracts eth', () => {
    const els = getAllByNetwork('eth')

    const valueArr = els.map(function (item) { return item.contract })
    const unique = [...new Set(valueArr)]
    expect(unique.length === valueArr.length).toBe(true)
  })

  test('unique contracts bsc', () => {
    const els = getAllByNetwork('bsc')

    const valueArr = els.map(function (item) { return item.contract })
    const unique = [...new Set(valueArr)]
    expect(unique.length === valueArr.length).toBe(true)
  })

  test('unique ids', () => {
    const valueArr = data.map(function (item) { return item.id })
    const unique = [...new Set(valueArr)]
    expect(unique.length === valueArr.length).toBe(true)
  })

  test('unique contracts trx', () => {
    const els = getAllByNetwork('trx')

    const valueArr = els.map(function (item) { return item.contract })
    const unique = [...new Set(valueArr)]
    expect(unique.length === valueArr.length).toBe(true)
  })

  test('validate eth address', () => {
    const el = findCryptoCurrencyData({ ticker: 'usdt', network: 'eth' })
    const isValid = validateCryptoAddress('0xdAC17F958D2ee523a2206206994597C13D831ec7', el)

    expect(isValid).toBe(true)
  })

  test('check invalid parameters', () => {
    const el = findCryptoCurrencyData({ ticker: 'invalid', network: 'invalid' })

    expect(el === null)

    const isValid = validateCryptoAddress('0xdAC17F958D2ee523a2206206994597C13D831ec7', el)

    expect(isValid).toBe(null)
  })
})
