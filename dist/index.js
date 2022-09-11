"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCryptoExtraId = exports.validateCryptoAddress = exports.getAllByTicker = exports.getCryptoCurrencyDataById = exports.findCryptoCurrencyData = exports.getAllCoins = exports.getAllByFamily = void 0;
const information_coins_json_1 = __importDefault(require("./information-coins.json"));
const lib_1 = require("./lib");
const { byFamily, byContracts, byIds } = (0, lib_1.prepareList)(information_coins_json_1.default);
function getAllByFamily(family) {
    return Object.values(byFamily).filter((el) => el.family === family) || [];
}
exports.getAllByFamily = getAllByFamily;
function getAllCoins() {
    return Object.values(byFamily).filter((el) => el.family === el.ticker);
}
exports.getAllCoins = getAllCoins;
function findCryptoCurrencyData({ ticker, family, contract }) {
    let key = `${family}${contract === null || contract === void 0 ? void 0 : contract.toLowerCase()}`;
    if (contract && byContracts[key]) {
        return (0, lib_1.prepareInformation)(byContracts[key]);
    }
    if (!ticker)
        return null;
    key = `${ticker}${family}`;
    if (byFamily[key]) {
        return (0, lib_1.prepareInformation)(byFamily[key]);
    }
    return null;
}
exports.findCryptoCurrencyData = findCryptoCurrencyData;
function getCryptoCurrencyDataById(id) {
    return byIds[id] || null;
}
exports.getCryptoCurrencyDataById = getCryptoCurrencyDataById;
function getAllByTicker(ticker) {
    return information_coins_json_1.default.filter((item) => item.ticker === ticker);
}
exports.getAllByTicker = getAllByTicker;
function validateCryptoAddress(address, params) {
    if (!params)
        return null;
    if (typeof (params === null || params === void 0 ? void 0 : params.regex_address) !== 'undefined') {
        const reg = new RegExp(params.regex_address);
        return reg.test(address);
    }
    const coin = findCryptoCurrencyData(params);
    if (coin) {
        if (!coin.regex_extra_id)
            return null;
        const reg = new RegExp(coin.regex_address);
        return reg.test(address);
    }
    return null;
}
exports.validateCryptoAddress = validateCryptoAddress;
function validateCryptoExtraId(extraId, params) {
    if (!params)
        return null;
    if (typeof (params === null || params === void 0 ? void 0 : params.regex_extra_id) !== 'undefined') {
        const reg = new RegExp(params.regex_extra_id);
        return reg.test(extraId);
    }
    const coin = findCryptoCurrencyData(params);
    if (coin) {
        if (!coin.regex_extra_id)
            return null;
        const reg = new RegExp(coin.regex_extra_id);
        return reg.test(extraId);
    }
    return null;
}
exports.validateCryptoExtraId = validateCryptoExtraId;
