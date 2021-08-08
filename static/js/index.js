import { MoreButton } from './MoreButton.js';
import { CanvasManager } from './CanvasManager.js';

/**
 * @author 어진석
 */
class App {
  constructor() {}

  create() {
    // 캔버스 생성
    this.createCanvas();

    // 더보기 목록 동적 생성
    this.createMoreTextButton();
  }

  createCanvas() {
    try {
      this._canvas = new CanvasManager();
    } catch (e) {
      console.warn(e);
    }
  }

  createMoreTextButton() {
    const items = Array.from(document.querySelectorAll('.card-description'));

    items.forEach((div) => {
      const moreButton = new MoreButton(div);
      moreButton.connect();
    });
  }
}

window.addEventListener('load', () => {
  const app = new App();
  app.create();
});
