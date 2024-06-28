export default class Building {
  constructor(sqft) {
    this._sqft = Building.isNumber(sqft);

    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  static isNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }
}
