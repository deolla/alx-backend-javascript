export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = null;
    this._length = null;
    this._students = null;

    this.name = name;
    this.length = length;
    this.students = students;
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

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new Error('Length must be a number.');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
      this._students = value;
    } else {
      throw new Error('Students must be an array of strings.');
    }
  }
}
