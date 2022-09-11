"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meta_1 = require("./meta");
describe('Meta', () => {
    test('validate find meta information', () => {
        const el = (0, meta_1.findCryptoCurrencyMeta)({ ticker: 'eth', family: 'eth' });
        expect(el.web_site === 'https://ethereum.org/');
    });
});
