# Crypto currency data information

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
const eth = new findCryptoCurrencyData({ ticker: 'eth', network: 'eth' });
const tether = new findCryptoCurrencyData({ network: 'eth', contract: '0xdac17f958d2ee523a2206206994597c13d831ec7' });
const inch = new getCryptoCurrencyDataById(1);

console.log(eth) // eth coin information
console.log(tether) // tether token information
console.log(inch) // inch token information
```
