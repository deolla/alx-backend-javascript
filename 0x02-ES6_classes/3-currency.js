export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this.__code = value;
    } else {
      throw new Error('Code must be a string.');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Name must be a string.');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
