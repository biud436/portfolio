export interface ProjectLink {
  label: string;
  href: string;
  icon?: string;
}

export interface ProjectItem {
  key: string;
  title: string;
  subtitle: string;
  period: string;
  image: string;
  links: ProjectLink[];
}

const ITEMS: ProjectItem[] = [
  {
    key: 'stingerloom-orm',
    title: 'StingerLoom ORM',
    subtitle: 'PostgreSQL · MySQL · SQLite ORM',
    period: '2026.02 — 현재',
    image:
      'https://opengraph.githubassets.com/d2910518656c9536ff38515a591b3d3e596cde6757ea673195cab001709b1a70/biud436/stingerloom-orm',
    links: [
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/@stingerloom/orm',
        icon: 'lucide:package',
      },
      {
        label: '문서',
        href: 'https://biud436.github.io/stingerloom-orm/',
        icon: 'lucide:book-open',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/biud436/stingerloom-orm',
      },
    ],
  },
  {
    key: 'customServer',
    title: 'StingerLoom',
    subtitle: '백엔드 프레임워크',
    period: '2023.07 — 현재',
    image:
      'https://github.com/biud436/blog-front/assets/13586185/40629880-5785-4733-a95f-24f9f2b23641',
    links: [
      { label: 'GitHub', href: 'https://github.com/biud436/stingerloom' },
    ],
  },
  {
    key: 'weatherReact',
    title: '날씨 (리액트)',
    subtitle: 'SPA · 인터랙티브 차트',
    period: '2022.05',
    image:
      'https://user-images.githubusercontent.com/13586185/169680914-72cf246c-e00c-4c33-8c31-00228a08313a.gif',
    links: [
      { label: 'GitHub', href: 'https://github.com/biud436/weather-react' },
    ],
  },
  {
    key: 'rgssCompiler',
    title: 'RGSS 스크립트 컴파일러',
    subtitle: 'VSCode 확장',
    period: '2022.03',
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
    key: 'blog',
    title: '개인 블로그',
    subtitle: '풀스택 웹사이트',
    period: '2022.03 — 현재',
    image:
      'https://github.com/biud436/blog-api-server/assets/13586185/6279ed5b-9eec-4d59-bba6-d0961b107ebb',
    links: [
      { label: '서버', href: 'https://github.com/biud436/blog-api-server' },
      { label: '프론트', href: 'https://github.com/biud436/blog-front' },
    ],
  },
  {
    key: 'shoppingMall',
    title: '쇼핑몰 프로젝트',
    subtitle: 'JSP · MVC2 팀 프로젝트',
    period: '2020.10 — 2021.01',
    image: '/assets/img/portfolio/portfolio1.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/biud436/project_one' },
    ],
  },
  {
    key: 'initialEditor',
    title: 'Initial Editor',
    subtitle: '웹 기반 타일맵 에디터',
    period: '2020.10 — 2020.12',
    image:
      'https://github.com/biud436/Initial2D/raw/master/docs/img/new_editor.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/biud436/InitialEditor' },
    ],
  },
  {
    key: 'weather',
    title: '주간 날씨',
    subtitle: 'Canvas · Open Weather',
    period: '2020.09',
    image: '/assets/img/portfolio/weather.png',
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
    key: 'androidAppBuilder',
    title: '안드로이드 APK 빌더',
    subtitle: 'Cordova · Android SDK',
    period: '2019.11 — 2020.02',
    image:
      'https://github.com/biud436/MV-App-Builder/raw/master/screenshot.png',
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
    subtitle: '자체 개발 C++ 게임 엔진',
    period: '2019.01 — 2020.12',
    image: '/assets/img/portfolio/pp6.png',
    links: [{ label: 'GitHub', href: 'https://github.com/biud436/Initial2D' }],
  },
];

const fetchProjectContents = () => queryCollection('projects').all();

export async function useProjectsAsync() {
  const { data: contents } = await useAsyncData(
    'projects-all',
    fetchProjectContents,
  );
  return { items: ITEMS, contents };
}

export function useProjectsItems() {
  return ITEMS;
}
