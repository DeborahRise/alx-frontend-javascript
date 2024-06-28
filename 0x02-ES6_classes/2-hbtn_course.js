export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.isString(name);
    this._length = this.isNumber(length);
    this._students = this.isStudentsArray(students);
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this._name = this.isString(name);
  }

  set length(length) {
    this._length = this.isNumber(length);
  }

  set students(students) {
    this._students = this.isStudentsArray(students);
  }

  static isString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  static isNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  static isStudentsArray(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Student must be an array');
    }
    return value;
  }
}
