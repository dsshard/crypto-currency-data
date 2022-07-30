export function prepareInformation (item) {
  if (!item) return null
  if (item.network === 'eth' && item.is_token) {
    Object.assign(item, {
      regex_address: '^(0x)[0-9A-Fa-f]{40}$',
      url_block: 'https://etherscan.io/block/',
      url_address: 'https://etherscan.io/address/',
      url_tx: 'https://etherscan.io/tx/'
    })
  }

  if (item.network === 'bsc' && item.is_token) {
    Object.assign(item, {
      regex_address: '^(0x)[0-9A-Fa-f]{40}$',
      url_block: 'https://bscscan.com/block/',
      url_address: 'https://bscscan.com/address/',
      url_tx: 'https://bscscan.com/tx/'
    })
  }

  if (item.network === 'bnb' && item.is_token) {
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
