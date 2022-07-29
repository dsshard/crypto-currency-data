"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoCurrencyData = void 0;
const result_json_1 = __importDefault(require("./result.json"));
const lib_1 = require("./lib");
const byContracts = {};
const byNetworks = {};
for (const coin of result_json_1.default) {
    if (coin.smart_contract) {
        byContracts[coin.smart_contract] = coin;
    }
    else {
        const key = `${coin.ticker}${coin.network}`;
        byNetworks[key] = coin;
    }
}
function getCryptoCurrencyData({ ticker, network, contract }) {
    if (byContracts[contract]) {
        return (0, lib_1.prepareInformation)(byContracts[contract]);
    }
    const key = `${ticker}${network}`;
    return (0, lib_1.prepareInformation)(byNetworks[key]);
}
exports.getCryptoCurrencyData = getCryptoCurrencyData;
