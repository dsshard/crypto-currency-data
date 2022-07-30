# Crypto currency data information

**Description**

🚀 Get 3000+ crypto currency information. Decimals, descriptions, website, contract ane etc...!


**Install**

```shell
npm install @coxy/crypto-currency-data
```

**Create**

```javascript
import { findCryptoCurrencyData } from '@coxy/crypto-currency-data';
```

... or using CommonJS syntax:

```javascript
const { findCryptoCurrencyData } = require('@coxy/crypto-currency-data');
```

```javascript
const eth = findCryptoCurrencyData({ ticker: 'eth', network: 'eth' });
const tether = findCryptoCurrencyData({ network: 'eth', contract: '0xdac17f958d2ee523a2206206994597c13d831ec7' });
const inch = getCryptoCurrencyDataById(1);

console.log(validateCryptoAddress('0xdac17f958d2ee523a2206206994597c13d831ec7', tether))

console.log(eth) // eth coin information
console.log(tether) // tether token information
console.log(inch) // inch token information
```

Provide information by coin

```typescript
type Coin = {
  id: number,
  network: string,
  ticker: string,
  regex_address:string,
  is_token: boolean,
  decimals_main: number,
  // only for tokens
  smart_contract?: string,
  
  // optional
  title?: string,
  regex_extra_id?: string,
  extra_id_title?: string,
  url_block?: string,
  url_address?: string,
  launch_data?: string,
  description?: string,
  web_site?: string,
  decimals_display?: number,
  max_supply?: number,
  proof_type?: string,
  algorithm?: string,
  color?: string
}
```
