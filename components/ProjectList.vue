<template>
  <div>
    <!-- Modal 1-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project Details Go Here-->
                  <h2 class="text-uppercase">쇼핑몰 클론</h2>
                  <p class="item-intro text-muted">
                    이 프로젝트는 쇼핑몰 중개 사이트입니다.
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="assets/img/portfolio/portfolio1.png"
                    alt=""
                  />
                  <p>
                    이 프로젝트는 실제 존재하는 사이트의 클론(Clone) 프로젝트로
                    시작했고 팀 프로젝트입니다.
                  </p>
                  <p></p>
                  <p>
                    ES6의 import/export 문을 적극 활용하여 여러 명이 협업할 수
                    있게 모듈화 프로그래밍을 주도하였으며
                  </p>
                  <p>
                    자주 사용되는 기능(로그인, 메뉴, 최근 상품, 카테고리)을
                    컴포넌트 패턴으로 정리하여 자바 패키지처럼 간단히 로드하여
                    사용할 수 있게 하였습니다
                  </p>
                  <p></p>
                  <p>
                    거의 모든 데이터는 AJAX를 통해 동적으로 생성되고 있으며, 이
                    과정에서 JSON 데이터를 주고 받습니다.
                  </p>
                  <p>
                    이 때문에 스크롤 시 많은 데이터가 로드되는 것을 사전에
                    차단하기 위해 underscore.js의 쓰로틀링 방지 기능 사용하여
                    한정된 데이터를 순서대로 받아오게 했습니다.
                  </p>
                  <p></p>
                  <p>
                    소셜 로그인 OAuth API를 이용하여 네이버, 카카오, 페이스북
                    아이디로 회원 가입 또는 로그인을 할 수 있습니다.
                  </p>
                  <p>또한 페이스북 계정으로 댓글을 남길 수도 있습니다.</p>
                  <p></p>
                  <p>문의를 위한 MVC2 패턴으로 디자인된 게시판이 존재합니다.</p>
                  <p></p>
                  <p>
                    회원 가입 시, 비밀번호는 SHA-256을 이용하여 단방향 암호화
                    처리가 되어 있으며 상품은 관리자 모드를 통해 업로드가
                    가능합니다.
                  </p>
                  <p>
                    또한 카카오페이를 통해 테스트 주문을 할 수가 있고 실제로
                    결제가 되었는지 REST API로 검증하는 코드가 들어갔습니다.
                  </p>
                  <p></p>
                  <p>
                    장바구니 기능은 세션으로 구현되었으며, 비밀번호 찾기는 SMTP
                    이메일 인증을 거칩니다.
                  </p>
                  <p>
                    이때, 이메일에 JWT가 포함된 인증 링크가 발송되며 링크를
                    누르면 임시 비밀번호가 발급되는 방식으로 구현하였습니다.
                  </p>
                  <p></p>
                  <p>
                    현재 오라클 클라우드 리눅스 우분투 서버에 톰캣과 마리아DB
                    그리고 https 인증서를 설치하여 서버를 24시간 가동하고
                    있습니다.
                  </p>

                  <ul class="list-inline">
                    <li>개발 기간 : 2020.10.01 ~ 2021.01.05</li>
                    <li>사용한 기술: HTML5, CSS/SCSS, JavaScript, Java/JSP</li>
                    <li>
                      사용한 라이브러리: jQuery, 아임포트(카카오페이), 네이버
                      로그인, 카카오 로그인, 페이스북 로그인, 페이스북 소셜 댓글
                      플러그인, EmailJS(메일 인증), Java Mail + JWT(비밀번호
                      찾기)
                    </li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times mr-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 2-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project Details Go Here-->
                  <h2 class="text-uppercase">날씨</h2>
                  <p class="item-intro text-muted">
                    월-금까지의 날씨 데이터를 차트로 보여주는 사이트입니다.
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="assets/img/portfolio/weather.png"
                    alt=""
                  />
                  <p>
                    이 사이트는 월요일부터 금요일까지의 데이터를 차트로 보여주는
                    사이트입니다.
                  </p>
                  <p>
                    물방울 모양의 아이콘과 풍향과 기온 차트는 HTML 캔버스 API를
                    이용하여 직접 그렸습니다.
                  </p>
                  <ul class="list-inline">
                    <li>Date: 2020.09.15</li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times mr-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 3-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal3"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <img src="/assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project Details Go Here-->
                  <h2 class="text-uppercase">웹 기반 타일맵 에디터</h2>
                  <p class="item-intro text-muted">
                    타일맵을 편집하고 내보낼 수 있는 도구입니다.
                  </p>
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      width="727"
                      height="409"
                      src="https://www.youtube.com/embed/q9t3xOL30bI"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p>
                    요즘은 크로스 플랫폼 구동을 위하여 프로그램이 웹기반으로
                    개발되기도 합니다.
                  </p>
                  <p>
                    예를 들면, 네이버 워드, 구글 Docs, 한글 웹버전, Visual
                    Studio Code, Atom 등 많은 프로그램이 이를 입증합니다.
                  </p>
                  <p>
                    Electron과 CSS 등의 웹기술을 활용하면 크로스 플랫폼
                    프로그램을 보다 더 쉽게 만들 수 있습니다.
                  </p>
                  <p>
                    이 프로젝트는 타입스크립트로 작성되었고, 웹팩으로
                    번들링되었습니다.
                  </p>
                  <p>
                    또한 펜, 사각형, 원형 툴과 총 4개의 레이어를 지원하며,
                    채우기 기능은 Flood-Fill 알고리즘을 이용하여 빠른 채우기가
                    가능합니다.
                  </p>
                  <p>
                    이외에도 Dark 테마와 Light 테마 변경 기능을 제공하고,
                    Electron의 fs 모듈을 통해 타일맵 데이터를 JSON으로 내보낼 수
                    있습니다.
                  </p>

                  <ul class="list-inline">
                    <li>2020.10.01</li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times mr-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 4-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal4"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <img src="/assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project Details Go Here-->
                  <h2 class="text-uppercase">Short URL</h2>
                  <p class="item-intro text-muted">
                    짧은 주소 변환 서비스입니다.
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="/assets/img/portfolio/shorturl.png"
                    alt=""
                  />
                  <p>
                    짧은 주소 변환 서비스는 Node.js Express와 깃허브 페이지를
                    이용하였습니다.
                  </p>
                  <p>
                    DB에 원본 주소와 MD5로 변환된 주소가 저장되며 접속 시 DB를
                    확인하여 리다이렉션하는 서비스입니다.
                  </p>
                  <ul class="list-inline">
                    <li>Date: 2021.01.13 ~ 2021.01.14</li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times mr-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 5-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal5"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project Details Go Here-->
                  <h2 class="text-uppercase">안드로이드 앱 빌더</h2>
                  <p class="item-intro text-muted">
                    Cordova와 Android SDK를 이용하여 안드로이드 APK를 자동
                    생성해줍니다
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="https://github.com/biud436/MV-App-Builder/raw/master/screenshot.png"
                    alt=""
                  />
                  <p>
                    코르도바 CLI과 안드로이드 SDK를 이용하여 안드로이드 앱을
                    만들어주는 빌더 프로그램입니다(29 레벨까지만 지원)
                  </p>
                  <p>
                    자바 8 버전과 안드로이드 SDK 설치(19, 29, 30) 및 환경 변수
                    설정, 코르도바를 설치해야 합니다
                  </p>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times mr-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 6-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal6"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project Details Go Here-->
                  <h2 class="text-uppercase">Initial2D</h2>
                  <p class="item-intro text-muted">C++ 2D 게임 엔진입니다.</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="/assets/img/portfolio/pp6.png"
                    alt=""
                  />
                  <table class="table">
                    <thead>
                      <tr>
                        <th align="center">구분</th>
                        <th align="center">내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="center">Version</td>
                        <td align="center">Beta</td>
                      </tr>
                      <tr>
                        <td align="center">Platform</td>
                        <td align="center">Windows</td>
                      </tr>
                      <tr>
                        <td align="center">사용된 언어</td>
                        <td align="center">C++, Lua</td>
                      </tr>
                      <tr>
                        <td align="center">Engine Type</td>
                        <td align="center">자체 개발 엔진</td>
                      </tr>
                      <tr>
                        <td align="center">Graphics Device</td>
                        <td align="center">Windows GDI 사용</td>
                      </tr>
                      <tr>
                        <td align="center">이미지 포맷</td>
                        <td align="center">*.PNG(libpng), *.BMP 지원</td>
                      </tr>
                      <tr>
                        <td align="center">오디오 재생</td>
                        <td align="center">
                          *.ogg 포함 대부분 포맷 지원 (SDL Audio 사용)
                        </td>
                      </tr>
                      <tr>
                        <td align="center">동영상 재생</td>
                        <td align="center">동영상 재생 불가</td>
                      </tr>
                      <tr>
                        <td align="center">하드웨어 가속 여부</td>
                        <td align="center">false</td>
                      </tr>
                      <tr>
                        <td align="center">Script Engine</td>
                        <td align="center">Lua v5.0.3</td>
                      </tr>
                      <tr>
                        <td align="center">Map Editor</td>
                        <td align="center">개발 중 (일렉트론)</td>
                      </tr>
                      <tr>
                        <td align="center">Data Type</td>
                        <td align="center">
                          *.json (Game Data), *.sqlite (DB)
                        </td>
                      </tr>
                      <tr>
                        <td align="center">암호화 지원</td>
                        <td align="center">false</td>
                      </tr>
                      <tr>
                        <td align="center">멀티 쓰레딩 지원</td>
                        <td align="center">false</td>
                      </tr>
                      <tr>
                        <td align="center">쓰레드 처리 지원</td>
                        <td align="center">Unstable</td>
                      </tr>
                      <tr>
                        <td align="center">프로세스 실행</td>
                        <td align="center">true</td>
                      </tr>
                      <tr>
                        <td align="center">Bitmap Font 지원</td>
                        <td align="center">true</td>
                      </tr>
                      <tr>
                        <td align="center">
                          GetGlyphOutline을 이용한 폰트 묘화 지원
                        </td>
                        <td align="center">true</td>
                      </tr>
                      <tr>
                        <td align="center">타일맵 지원</td>
                        <td align="center">true</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times mr-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
<style lang="scss"></style>
