"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Index', () => {
    test('validate element', () => {
        const el = (0, index_1.getCryptoCurrencyDataById)(1);
        expect(el.id === 1);
    });
    test('validate element', () => {
        const el = (0, index_1.getCryptoCurrencyDataById)(2858);
        expect(el.network === 'bsc');
    });
    test('validate element', () => {
        const el = (0, index_1.findCryptoCurrencyData)({ ticker: 'usdt', network: 'eth' });
        expect(el.contract === '0xdAC17F958D2ee523a2206206994597C13D831ec7');
    });
    test('unique contracts eth', () => {
        const els = (0, index_1.getAllByNetwork)('eth');
        const valueArr = els.map(function (item) { return item.contract; });
        const unique = [...new Set(valueArr)];
        expect(unique.length === valueArr.length);
    });
    test('unique contracts bsc', () => {
        const els = (0, index_1.getAllByNetwork)('bsc');
        const valueArr = els.map(function (item) { return item.contract; });
        const unique = [...new Set(valueArr)];
        expect(unique.length === valueArr.length);
    });
    test('unique contracts trx', () => {
        const els = (0, index_1.getAllByNetwork)('trx');
        const valueArr = els.map(function (item) { return item.contract; });
        const unique = [...new Set(valueArr)];
        expect(unique.length === valueArr.length);
    });
    test('unique contracts trx', () => {
        const el = (0, index_1.findCryptoCurrencyData)({ ticker: 'usdt', network: 'eth' });
        const isValid = (0, index_1.validateCryptoAddress)('0xdAC17F958D2ee523a2206206994597C13D831ec7', el);
        expect(isValid);
    });
    test('invalid parameters', () => {
        const el = (0, index_1.findCryptoCurrencyData)({ ticker: 'invalid', network: 'invalid' });
        expect(el === null);
        const isValid = (0, index_1.validateCryptoAddress)('0xdAC17F958D2ee523a2206206994597C13D831ec7', el);
        expect(!isValid);
    });
});
