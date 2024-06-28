import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = SkyHighBuilding.isNumber(floors);
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = SkyHighBuilding.isNumber(floors);
  }

  static isNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
