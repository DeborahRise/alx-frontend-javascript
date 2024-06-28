import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = Pricing.isNumber(amount);
        this._currency = currency
    }

    get amount() {
        return this._amount;
      }
    
      get currency() {
        return this._currency;
      }
    
      set amount(amount) {
        this._amount = Pricing.isNumber(amount);
      }
    
      set currency(currency) {
        currency = new Currency();
        this._currency = currency;
      }
    
      static isNumber(value) {
        if (typeof value !== 'number') {
          throw new TypeError('Length must be a number');
        }
        return value;
      }
      displayFullPrice() {

        return (`${this._amount} ${this._currency.displayFullCurrency()}`)
      }
      static convertPrice(amount, conversionRate) {
        
        return (`${amount} * ${conversionRate}`)
      }
}