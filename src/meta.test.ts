import { findCryptoCurrencyMeta } from './meta'

describe('Meta', () => {
  test('validate find meta information', () => {
    const el = findCryptoCurrencyMeta({ ticker: 'eth', family: 'eth' })
    expect(el.web_site === 'https://ethereum.org/')
  })
})
