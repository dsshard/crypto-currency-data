"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log((0, index_1.getCryptoCurrencyData)({ ticker: 'eth', network: 'eth' }));
console.log((0, index_1.getCryptoCurrencyData)({ contract: '0xdac17f958d2ee523a2206206994597c13d831ec7' }));
