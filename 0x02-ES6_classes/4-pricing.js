import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = Pricing.isNumber(amount);
        this.currency = Pricing.isString(currency);
    }

    get amount() {
        return this.amount;
      }
    
      get currency() {
        return this.currency;
      }
    
      set amount(amount) {
        this.amount = Pricing.isNumber(amount);
      }
    
      set currency(currency) {
        this.currency = Pricing.isString(currency);
      }
    
      static isString(value) {
        if (typeof value !== 'string') {
          throw new TypeError('Value must be a string');
        }
        return value;
      }
      static isNumber(value) {
        if (typeof value !== 'number') {
          throw new TypeError('Length must be a number');
        }
        return value;
      }
      displayFullPrice() {

        console.log(`${this._amount} ${new Currency(currency_code, currency_name).displayFullCurrency()}`)
      }
}