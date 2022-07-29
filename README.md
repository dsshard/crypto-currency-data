# Crypto currency data information

**Install**

```shell
npm install @coxy/crypto-currency-data
```

**Create**

```javascript
import { getCryptoCurrencyData } from '@coxy/crypto-currency-data';
```

... or using CommonJS syntax:

```javascript
const { getCryptoCurrencyData } = require('@coxy/crypto-currency-data');
```

```javascript
const eth = new getCryptoCurrencyData({ ticker: 'eth', network: 'eth' });
const tether = new getCryptoCurrencyData({ contract: '0xdac17f958d2ee523a2206206994597c13d831ec7' });

console.log(eth) // eth coin information
console.log(tether) // tether token information
```
