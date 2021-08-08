export class CanvasManager {
    constructor() {
        this.initWithMembers();
        this.createEmptyCanvas();
        this.createContainer();
    }    

    initWithMembers() {
        this._canvas = document.getElementById("canvas");
    }

    createEmptyCanvas() {

        const header = document.querySelector("header");
        const c = getComputedStyle(header);

        const width = parseInt(c.width);
        const height = parseInt(c.height);

        // Create a PIXI Renderer.
        const app = new PIXI.Application({
            width,
            height,
            backgroundColor: 0x000000,
            resolution: window.devicePixelRatio || 1,
        });

        // 마스터 헤드에 캔버스를 추가한다.
        const masterHead = document.querySelector("header.masthead");
        masterHead.appendChild(app.view);

        $(app.view)
            .addClass("fixed-bottom")
            .css({
                "z-index": "-1"
            });

        this._app = app;
    }

    createContainer() {
        const container = new PIXI.Container();
        this._app.stage.addChild(container);

        const bg = PIXI.Sprite.from('/assets/img/header-bg.jpg');
        container.addChild(bg);

        let count = 0;

        // Create a filter.
        const blurFilter1 = new PIXI.filters.BlurFilter();

        // Create a filter.
        const crt = new PIXI.filters.CRTFilter({
            lineWidth: 3.6,
            noise: 0.5
        });

        // 글리치 효과 추가
        const glitch = new PIXI.filters.GlitchFilter({
            slices: 15,
            offset: 100,
            fillMode: 2,
            red: [15, 0]
        });

        bg.filters = [crt, glitch];

        const texts = [];
        const self = this;

        const myTexts = "안녕하세요제포트폴리오에오신것을매우환영합니다..".split("");

        for (let i = 0; i < 360; i += 15) {
            const style = new PIXI.TextStyle({
                stroke: "white",
                strokeThickness: 2
            });

            const c = myTexts[Math.floor(i / 15)];
            const text = new PIXI.Text(c, style);
            text.rotation = 0;
            text.x = Math.floor(i * (360 / window.innerWidth)) + i * 10;
            text.y = 32;
            text.dist = 0;
            text.dx = Math.floor(i * (360 / window.innerWidth))
            text.dy = window.innerHeight;
            text.acc = Math.PI / 2;

            text.on("move", function (deltaTime) {

                // 마우스 좌표 획득
                const mouse = self._app.renderer.plugins.interaction.mouse.global;

                const mx = mouse.x;
                const my = mouse.y;
                let speed = 1.5;
                let rad = Math.PI / 6;

                const {
                    dx,
                    dy,
                    x,
                    y,
                    acc
                } = this;
                let diff = Math.atan2(my - y, mx - x) - acc;

                const dist = Math.sqrt(Math.pow(mx - x, 2) + Math.pow(my - y, 2));

                const PI2 = Math.PI * 2;
                const VRAD = Math.PI * 2;
                while (diff < -Math.PI) diff += PI2;
                while (diff >= Math.PI) diff -= PI2;

                if (Math.abs(diff) < VRAD) {
                    rad += diff;
                } else {
                    rad += (diff < 0 ? -VRAD : VRAD);
                }

                if (dist >= i && dist > 0) {
                    this.x += Math.cos(rad) * speed;
                    this.y += Math.sin(rad) * speed;
                }

                this.rotation = rad / Math.PI / 2 + 0.25;

                if (this.y >= window.innerHeight / 2 && this.acc == 1) {
                    this.acc *= -1;
                }
                if (this.x < 0 && this.acc == -1) {
                    this.acc *= -1;
                }

            });

            // texts.push(text);
            // container.addChild(text);
        }

        // Update a frame.
        this._app.ticker.add((e) => {
            count += 0.005;

            const blurAmount = Math.cos(count);
            blurFilter1.blur = 5 * (blurAmount);

            crt.seed = e;
            glitch.seed = e * 0.5;

            texts.forEach(text => {
                text.emit("move", e);
            });

        });
    }

}