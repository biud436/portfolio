<template>
  <section id="portfolio" class="page-section bg-light">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">개인 프로젝트</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>

      <div v-for="item in items" :key="item.key" class="row">
        <a v-if="item.anchor" :id="item.anchor"></a>
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  :href="item.modal ?? '#'"
                  @click="onPortfolioClick($event, item)"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <Icon name="fa6-solid:plus" size="3em" />
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    :src="item.image"
                    width="400"
                    height="300"
                    alt=""
                  />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    <a :name="item.key">{{ item.title }}</a>
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    {{ item.subtitle }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="card-text card-description active">
                  <ContentRenderer
                    v-if="contentByKey[item.key]"
                    :value="contentByKey[item.key]"
                  />
                </div>
                <a
                  v-for="link in item.links"
                  :key="link.href"
                  class="btn"
                  :class="link.variant ?? 'btn-secondary'"
                  :href="link.href"
                  >{{ link.label }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PortfolioLink {
  label: string
  href: string
  variant?: string
}
interface PortfolioItem {
  key: string
  title: string
  subtitle: string
  image: string
  modal?: string
  anchor?: string
  links: PortfolioLink[]
}

const items: PortfolioItem[] = [
  {
    key: 'customServer',
    title: 'StingerLoom',
    subtitle: '프레임워크',
    image:
      'https://github.com/biud436/blog-front/assets/13586185/40629880-5785-4733-a95f-24f9f2b23641',
    links: [
      { label: 'Github 저장소', href: 'https://github.com/biud436/stingerloom' },
    ],
  },
  {
    key: 'blog',
    title: '블로그',
    subtitle: '웹사이트',
    image:
      'https://github.com/biud436/blog-api-server/assets/13586185/6279ed5b-9eec-4d59-bba6-d0961b107ebb',
    links: [
      {
        label: '서버 : Github 저장소',
        href: 'https://github.com/biud436/blog-api-server',
      },
      {
        label: '프론트 : Github 저장소',
        href: 'https://github.com/biud436/blog-front',
      },
    ],
  },
  {
    key: 'weatherReact',
    title: '날씨 (리액트 버전)',
    subtitle: '날씨',
    image:
      'https://user-images.githubusercontent.com/13586185/169680914-72cf246c-e00c-4c33-8c31-00228a08313a.gif',
    links: [
      { label: '깃허브로 이동', href: 'https://github.com/biud436/weather-react' },
    ],
  },
  {
    key: 'rgssCompiler',
    title: 'RGSS 스크립트 컴파일러',
    subtitle: 'VSCode Extension',
    image:
      'https://biud436.gallerycdn.vsassets.io/extensions/biud436/rgss-script-compiler/0.0.14/1648001730750/Microsoft.VisualStudio.Services.Icons.Default',
    links: [
      {
        label: '마켓 플레이스',
        href: 'https://marketplace.visualstudio.com/items?itemName=biud436.rgss-script-compiler',
        variant: 'btn-primary',
      },
      {
        label: '깃허브로 이동',
        href: 'https://github.com/biud436/vscode-rgss-script-compiler',
      },
    ],
  },
  {
    key: 'shoppingMall',
    title: '쇼핑몰 프로젝트',
    subtitle: '쇼핑몰',
    image: '/assets/img/portfolio/portfolio1.png',
    modal: '#portfolioModal1',
    anchor: 'shopping',
    links: [
      { label: '깃허브', href: 'https://github.com/biud436/project_one' },
    ],
  },
  {
    key: 'weather',
    title: '주간 날씨',
    subtitle: '날씨',
    image: '/assets/img/portfolio/weather.png',
    modal: '#portfolioModal2',
    links: [
      {
        label: '포트폴리오 보기',
        href: 'http://biud436.github.io/weather/',
        variant: 'btn-danger',
      },
      { label: '깃허브로 이동', href: 'https://github.com/biud436/weather' },
    ],
  },
  {
    key: 'initialEditor',
    title: '맵 에디터',
    subtitle: 'Initial Editor',
    image:
      'https://github.com/biud436/Initial2D/raw/master/docs/img/new_editor.png',
    modal: '#portfolioModal3',
    links: [
      { label: '깃허브로 이동', href: 'https://github.com/biud436/InitialEditor' },
    ],
  },
  {
    key: 'androidAppBuilder',
    title: '안드로이드 APK 빌더',
    subtitle: '빌더',
    image:
      'https://github.com/biud436/MV-App-Builder/raw/master/screenshot.png',
    modal: '#portfolioModal5',
    links: [
      {
        label: 'Releases',
        href: 'https://github.com/biud436/MV-App-Builder/releases',
        variant: 'btn-danger',
      },
      { label: '깃허브', href: 'https://github.com/biud436/MV-App-Builder' },
    ],
  },
  {
    key: 'initial2D',
    title: 'Initial2D',
    subtitle: '게임 엔진',
    image: '/assets/img/portfolio/pp6.png',
    modal: '#portfolioModal6',
    links: [
      { label: '깃허브', href: 'https://github.com/biud436/Initial2D' },
    ],
  },
]

const { open: openModal } = useModal()

function onPortfolioClick(e: MouseEvent, item: PortfolioItem) {
  if (!item.modal) return
  e.preventDefault()
  openModal(item.modal.replace(/^#/, ''))
}

const { data: contents } = await useAsyncData('projects-all', () =>
  queryCollection('projects').all(),
)

const contentByKey = computed(() => {
  const map: Record<string, unknown> = {}
  for (const c of contents.value ?? []) {
    const slug = String(c.path).split('/').pop()
    if (slug) map[slug] = c
  }
  return map
})
</script>
