// Define a symbol for cloning
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Define the clone method using the symbol
    this[cloneSymbol] = () => {
      const Constructor = this.constructor;
      return new Constructor(this._brand, this._motor, this._color);
    };
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
