export function prepareInformation (item) {
  if (!item) return null

  const isToken = item.family !== item.ticker
  if (item.family === 'eth' && isToken) {
    Object.assign(item, {
      regex_address: '^(0x)[0-9A-Fa-f]{40}$',
      url_block: 'https://etherscan.io/block/',
      url_address: 'https://etherscan.io/address/',
      url_tx: 'https://etherscan.io/tx/'
    })
  }

  if (item.family === 'bsc' && isToken) {
    Object.assign(item, {
      regex_address: '^(0x)[0-9A-Fa-f]{40}$',
      url_block: 'https://bscscan.com/block/',
      url_address: 'https://bscscan.com/address/',
      url_tx: 'https://bscscan.com/tx/'
    })
  }

  if (item.family === 'trx' && isToken) {
    Object.assign(item, {
      regex_address: '^T[1-9A-HJ-NP-Za-km-z]{33}$',
      url_block: 'https://tronscan.org/#/block/',
      url_address: 'https://tronscan.org/#/address/',
      url_tx: 'https://tronscan.org/#/transaction/'
    })
  }

  if (item.family === 'bnb' && isToken) {
    Object.assign(item, {
      regex_address: '^(bnb1)[0-9a-z]{38}$',
      regex_extra_id: '^[0-9A-Za-z\\-_]{1,120}$',
      extra_id_title: 'MEMO',
      url_block: 'https://binance.mintscan.io/blocks/',
      url_address: 'https://binance.mintscan.io/account/',
      url_tx: 'https://binance.mintscan.io/tx/'
    })
  }
  return item
}

export function prepareList (list) {
  const byContracts = {}
  const byFamily = {}
  const byIds = {}

  for (const coin of list) {
    if (coin.id) {
      byIds[coin.id] = coin
    }
    if (coin.contract) {
      const key = `${coin.family}${coin.contract.toLowerCase()}`
      byContracts[key] = coin
    }
    const key = `${coin.ticker}${coin.family}`
    byFamily[key] = coin
  }
  return { byContracts, byFamily, byIds }
}
