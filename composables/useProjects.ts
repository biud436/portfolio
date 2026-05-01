export interface ProjectLink {
  label: string
  href: string
  icon?: string
}

export interface ProjectItem {
  key: string
  title: string
  subtitle: string
  image: string
  links: ProjectLink[]
}

const ITEMS: ProjectItem[] = [
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
    links: [
      { label: 'GitHub', href: 'https://github.com/biud436/weather-react' },
    ],
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
    links: [{ label: 'GitHub', href: 'https://github.com/biud436/project_one' }],
  },
  {
    key: 'weather',
    title: '주간 날씨',
    subtitle: '날씨',
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
    key: 'initialEditor',
    title: '맵 에디터',
    subtitle: 'Initial Editor',
    image:
      'https://github.com/biud436/Initial2D/raw/master/docs/img/new_editor.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/biud436/InitialEditor' },
    ],
  },
  {
    key: 'androidAppBuilder',
    title: '안드로이드 APK 빌더',
    subtitle: '빌더',
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
    subtitle: '게임 엔진',
    image: '/assets/img/portfolio/pp6.png',
    links: [{ label: 'GitHub', href: 'https://github.com/biud436/Initial2D' }],
  },
]

function fetchProjectContents() {
  return queryCollection('projects').all()
}

export function useProjects() {
  const { data: contents } = useAsyncData('projects-all', fetchProjectContents)
  return { items: ITEMS, contents }
}
