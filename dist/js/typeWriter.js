/**
 * @author 어진석
 */

(function () {
  class TypeWriterApp {
    constructor() {
      const app = document.querySelector(
        '.masthead > .container > .masthead-subheading'
      );

      this._title = new Typewriter(app, {
        loop: true,
      });

      this.run();
    }

    run() {
      this._title.typeString("Eo JinSeok's Portfolio.").pauseFor(2500).start();
    }
  }

  window.addEventListener('load', () => {
    window.app = new TypeWriterApp();
  });
})();
