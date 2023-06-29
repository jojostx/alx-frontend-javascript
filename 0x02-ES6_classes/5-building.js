export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
