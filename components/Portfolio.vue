<template>
  <section id="portfolio" class="section">
    <div class="section-inner">
      <div class="text-center">
        <span class="eyebrow">Projects</span>
        <h2 class="section-title">개인 프로젝트</h2>
        <p class="section-subtitle">
          취미와 학습 과정에서 만든 사이드 프로젝트들.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in items"
          :key="item.key"
          class="surface group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-indigo-400/60"
        >
          <div class="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
            <img
              :src="item.image"
              :alt="item.title"
              class="size-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/0 to-zinc-950/0"
            ></div>
            <div class="absolute left-3 top-3">
              <span
                class="inline-block rounded-full bg-zinc-950/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-indigo-200 backdrop-blur"
                >{{ item.subtitle }}</span
              >
            </div>
          </div>

          <div class="flex flex-1 flex-col gap-4 p-5">
            <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>

            <div
              v-if="contentByKey[item.key]"
              class="text-sm text-zinc-400 [&>p]:mb-2 [&>p:last-child]:mb-0 line-clamp-4"
            >
              <ContentRenderer :value="contentByKey[item.key]" />
            </div>

            <div class="mt-auto flex flex-wrap items-center gap-2 pt-2">
              <button
                v-if="item.modal"
                type="button"
                class="btn-ghost"
                @click="openModal(item.modal!.replace(/^#/, ''))"
              >
                <Icon name="lucide:expand" size="1em" />
                자세히
              </button>
              <a
                v-for="link in item.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-link"
              >
                <Icon
                  :name="link.icon ?? 'fa6-brands:github'"
                  size="1em"
                />
                {{ link.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PortfolioLink {
  label: string
  href: string
  icon?: string
}
interface PortfolioItem {
  key: string
  title: string
  subtitle: string
  image: string
  modal?: string
  links: PortfolioLink[]
}

const items: PortfolioItem[] = [
  {
    key: 'customServer',
    title: 'StingerLoom',
    subtitle: '프레임워크',
    image:
      'https://github.com/biud436/blog-front/assets/13586185/40629880-5785-4733-a95f-24f9f2b23641',
    links: [{ label: 'GitHub', href: 'https://github.com/biud436/stingerloom' }],
  },
  {
    key: 'blog',
    title: '블로그',
    subtitle: '웹사이트',
    image:
      'https://github.com/biud436/blog-api-server/assets/13586185/6279ed5b-9eec-4d59-bba6-d0961b107ebb',
    links: [
      { label: '서버', href: 'https://github.com/biud436/blog-api-server' },
      { label: '프론트', href: 'https://github.com/biud436/blog-front' },
    ],
  },
  {
    key: 'weatherReact',
    title: '날씨 (리액트)',
    subtitle: '날씨',
    image:
      'https://user-images.githubusercontent.com/13586185/169680914-72cf246c-e00c-4c33-8c31-00228a08313a.gif',
    links: [{ label: 'GitHub', href: 'https://github.com/biud436/weather-react' }],
  },
  {
    key: 'rgssCompiler',
    title: 'RGSS 스크립트 컴파일러',
    subtitle: 'VSCode 확장',
    image:
      'https://biud436.gallerycdn.vsassets.io/extensions/biud436/rgss-script-compiler/0.0.14/1648001730750/Microsoft.VisualStudio.Services.Icons.Default',
    links: [
      {
        label: 'Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=biud436.rgss-script-compiler',
        icon: 'lucide:store',
      },
      {
        label: 'GitHub',
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
    links: [{ label: 'GitHub', href: 'https://github.com/biud436/project_one' }],
  },
  {
    key: 'weather',
    title: '주간 날씨',
    subtitle: '날씨',
    image: '/assets/img/portfolio/weather.png',
    modal: '#portfolioModal2',
    links: [
      {
        label: '데모',
        href: 'http://biud436.github.io/weather/',
        icon: 'lucide:external-link',
      },
      { label: 'GitHub', href: 'https://github.com/biud436/weather' },
    ],
  },
  {
    key: 'initialEditor',
    title: '맵 에디터',
    subtitle: 'Initial Editor',
    image:
      'https://github.com/biud436/Initial2D/raw/master/docs/img/new_editor.png',
    modal: '#portfolioModal3',
    links: [{ label: 'GitHub', href: 'https://github.com/biud436/InitialEditor' }],
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
        icon: 'lucide:download',
      },
      { label: 'GitHub', href: 'https://github.com/biud436/MV-App-Builder' },
    ],
  },
  {
    key: 'initial2D',
    title: 'Initial2D',
    subtitle: '게임 엔진',
    image: '/assets/img/portfolio/pp6.png',
    modal: '#portfolioModal6',
    links: [{ label: 'GitHub', href: 'https://github.com/biud436/Initial2D' }],
  },
]

const { open: openModal } = useModal()

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
