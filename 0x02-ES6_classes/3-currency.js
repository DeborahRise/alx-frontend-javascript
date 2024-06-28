export default class Currency {
    constructor(code, name) {
        this._code = Currency.isString(code);
        this._name = Currency.isString(name);
    }

    get code() {
        return this._code;
    }
    get name() {
        return this._name;
    }
    set code(code) {
        this._code = Currency.isString(code);
    }
    set name(name) {
        this._name = Currency.isString(name);
    }

    static isString(value) {
        if (typeof value !== 'string') {
          throw new TypeError('Value must be a string');
        }
        return value;
      }

      displayFullCurrency() {
        console.log(`${this._name} (${this._code})`);
      }
}
