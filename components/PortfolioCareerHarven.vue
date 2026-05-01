<template>
  <section id="portfolio2" class="page-section bg-light">
    <div class="container">
      <div class="card">
        <h5
          class="text-uppercase font-weight-bold text-center py-4 px-4 text-white"
          style="background-color: #3f51b5"
        >
          (주)하벤
        </h5>
        <div
          class="px-5 mb-5 pb-3 lead text-muted mt-3 border-top border-bottom bg-body-tertiary p-3"
        >
          <p class="mb-0 text-muted small">
            <Icon name="fa6-solid:calendar-day" class="mr-2" />
            <strong>Node.js Developer</strong>
          </p>
          <span class="text-muted">2021.04 ~ 2024.09 (3년 6개월)</span>
        </div>

        <div class="px-5 pb-3 lead text-muted mt-3 bg-body-tertiary p-3 mb-1">
          <h6 class="text-muted mb-3 font-weight-bold lead">주요 업무</h6>
          <ul class="list-unstyled mb-0 text-muted small">
            <li class="mb-2">
              <Icon name="fa6-solid:check" class="mr-2" /> 앱과 연계되는 백엔드
              서버 개발 및 유지 보수
            </li>
            <li class="mb-2">
              <Icon name="fa6-solid:check" class="mr-2" /> 자사 제품과 연동되는
              대시보드 사이트 개발 및 유지 보수
            </li>
            <li class="mb-2">
              <Icon name="fa6-solid:check" class="mr-2" /> 인프라 구축, 운영,
              배포 등 전반적인 DevOps 구축 및 관리
            </li>
          </ul>
        </div>

        <div class="px-5 mb-5 pb-3 lead text-muted bg-body-tertiary p-3">
          <details>
            <summary class="text-muted mb-3 font-weight-bold">
              상세 내용
            </summary>
            <div
              v-for="item in sortedContents"
              :key="item.path"
              class="row"
            >
              <a id="career-dashboard"></a>
              <div class="col-md-12 mb-4">
                <div class="row no-gutters">
                  <div class="col-md-12">
                    <div class="card-body">
                      <div class="card-text card-description active">
                        <ContentRenderer :value="item" />
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: contents } = await useAsyncData('career-all', () =>
  queryCollection('career').all(),
)

const sortedContents = computed(() => {
  const list = contents.value ?? []
  const re = /^([\d]+)-(.*)/
  return [...list].sort((a, b) => {
    const prev = String(a.path).split('/').pop() ?? ''
    const next = String(b.path).split('/').pop() ?? ''
    const g1 = re.exec(prev)
    const g2 = re.exec(next)
    if (!g1 || !g2) return 0
    return parseInt(g2[1], 10) - parseInt(g1[1], 10)
  })
})
</script>
