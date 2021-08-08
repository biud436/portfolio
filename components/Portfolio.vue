<template>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">포트폴리오</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>
      <div class="row">
        <a id="shopping"></a>
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="/assets/img/portfolio/portfolio1.png"
                    width="400"
                    height="300"
                    alt=""
                  />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">쇼핑몰 프로젝트</div>
                  <div class="portfolio-caption-subheading text-muted">
                    쇼핑몰
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p
                  class="card-text card-description active"
                  v-html="contents.shoppingMall"
                ></p>
                <br />
                <br />
                <h5 class="card-text">기타 :</h5>
                <a
                  class="btn btn-secondary"
                  href="https://github.com/biud436/project_one"
                  >깃허브</a
                >
                <a
                  class="portfolio-link btn btn-success"
                  data-toggle="modal"
                  href="#portfolioModal1"
                  >상세 설명</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="/assets/img/portfolio/weather.png"
                    width="400"
                    height="300"
                    alt=""
                  />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    <a name="weather">주간 날씨</a>
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    날씨
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p
                  class="card-text card-description active"
                  v-html="contents.weather"
                ></p>
                <a
                  class="btn btn-danger"
                  href="http://biud436.github.io/weather/"
                  >포트폴리오 보기</a
                >
                <a
                  class="btn btn-secondary"
                  href="https://github.com/biud436/weather"
                  >깃허브로 이동</a
                >
                <a
                  class="portfolio-link btn btn-success"
                  data-toggle="modal"
                  href="#portfolioModal2"
                  >상세 설명</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="https://github.com/biud436/Initial2D/raw/master/docs/img/new_editor.png"
                    alt=""
                  />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    <a name="map-editor">맵 에디터</a>
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    Initial Editor
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p
                  class="card-text card-description active"
                  v-html="contents.initialEditor"
                ></p>
                <!-- <a class="btn btn-danger" href="https://biud436.xyz:9007">HTTPS 서버(AWS EC2)</a> -->
                <h5 class="card-text">기타 :</h5>
                <a
                  class="btn btn-secondary"
                  href="https://github.com/biud436/InitialEditor"
                  >깃허브로 이동</a
                >
                <a
                  class="portfolio-link btn btn-success"
                  data-toggle="modal"
                  href="#portfolioModal3"
                  >상세 설명</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="https://github.com/biud436/MV-App-Builder/raw/master/screenshot.png"
                    alt=""
                  />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    <a name="short-url">안드로이드 APK 빌더</a>
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    빌더
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p
                  class="card-text card-description active"
                  v-html="contents.androidAppBuilder"
                ></p>
                <h5 class="card-text">다운로드 :</h5>
                <a
                  class="btn btn-danger"
                  href="https://github.com/biud436/MV-App-Builder/releases"
                  >Releases</a
                >
                <br />
                <br />
                <h5 class="card-text">개발 기간 :</h5>
                <p>3개월</p>
                <br />
                <h5 class="card-text">기타 :</h5>
                <a
                  class="btn btn-secondary"
                  href="https://github.com/biud436/MV-App-Builder"
                  >깃허브</a
                >
                <a
                  class="portfolio-link btn btn-success"
                  data-toggle="modal"
                  href="#portfolioModal5"
                  >상세 설명</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="/assets/img/portfolio/pp6.png"
                    alt=""
                  />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    <a name="short-url">Initial2D</a>
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    게임 엔진
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text"></p>
                <br />
                <p
                  class="card-text card-description active"
                  v-html="contents.initial2D"
                ></p>
                <h5 class="card-text">기타 :</h5>
                <a
                  class="btn btn-secondary"
                  href="https://github.com/biud436/Initial2D"
                  >깃허브</a
                >
                <a
                  class="portfolio-link btn btn-success"
                  data-toggle="modal"
                  href="#portfolioModal6"
                  >상세 설명</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      contents: {
        shoppingMall: '',
        weather: '',
        initial2D: '',
        androidAppBuilder: '',
        initialEditor: '',
      },
    };
  },
  async mounted() {
    await this.loadPortfolioShoppingMall();
    await this.loadPortfolioWeather();
    await this.loadPortfolioAndroidAppBuilder();
    await this.loadPortfolioInitial2D();
    await this.loadPortfolioInitialEditorBuilder();
  },
  methods: {
    async loadPortfolioShoppingMall() {
      const res = await this.$axios.get(
        'https://portfolio.biud436.com/markdown/shoppingMall.md'
      );
      if (res) {
        const data = res.data;
        // @ts-ignore
        this.contents.shoppingMall = window.marked(data);
      }
    },
    async loadPortfolioWeather() {
      const res = await this.$axios.get(
        'https://portfolio.biud436.com/markdown/weather.md'
      );
      if (res) {
        const data = res.data;
        // @ts-ignore
        this.contents.weather = window.marked(data);
      }
    },
    async loadPortfolioInitial2D() {
      const res = await this.$axios.get(
        'https://portfolio.biud436.com/markdown/initial2D.md'
      );
      if (res) {
        const data = res.data;
        // @ts-ignore
        this.contents.initial2D = window.marked(data);
      }
    },
    async loadPortfolioAndroidAppBuilder() {
      const res = await this.$axios.get(
        'https://portfolio.biud436.com/markdown/androidAppBuilder.md'
      );
      if (res) {
        const data = res.data;
        // @ts-ignore
        this.contents.androidAppBuilder = window.marked(data);
      }
    },
    async loadPortfolioInitialEditorBuilder() {
      const res = await this.$axios.get(
        'https://portfolio.biud436.com/markdown/initialEditor.md'
      );
      if (res) {
        const data = res.data;
        // @ts-ignore
        this.contents.initialEditor = window.marked(data);
      }
    },
  },
});
</script>
<style lang="scss"></style>
