class MoreButton {
  constructor(elem) {
    /**
     * @type {HTMLDivElement}
     */
    this._elem = elem;
  }

  toggle() {
    // return if the element is not exists?
    if (!this._elem) {
      return;
    }

    // remove it if the element is contained?
    if (this._elem.classList.contains('active')) {
      this._elem.classList.remove('active');
    } else {
      this._elem.classList.add('active');
    }
  }

  connect() {
    if (!this._elem) {
      return false;
    }
    this._elem.onclick = () => this.toggle();
  }
}

export { MoreButton };
