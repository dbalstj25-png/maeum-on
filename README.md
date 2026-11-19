# 마음온 (Maum:On) — GitHub Pages 배포용

기존에 제공된 `마음온.html..html`을 바탕으로, 화면과 기능을 유지하면서 관리하기 쉽도록 파일을 분리한 버전입니다.

## 폴더 구조

- `index.html`: 페이지 구조 및 콘텐츠 배치
- `css/style.css`: 색상, 글꼴, 간격, 반응형 디자인
- `js/app.js`: 자가점검 및 주요 인터랙션
- `js/map-embed.js`: 기존 지도 콘텐츠 임베드 로더
- `js/comic.js`: 첫 방문 안내 만화 인터랙션
- `js/config.js`: 사이트 설정 및 통계 ID
- `js/analytics.js`: 선택형 Google Analytics 4 연결

## GitHub Pages 배포

1. GitHub에 로그인하고 새 저장소(repository)를 만듭니다.
2. 저장소에 이 폴더 안의 파일과 폴더를 업로드합니다. `index.html`은 저장소 최상위에 있어야 합니다.
3. 저장소의 **Settings → Pages**로 이동합니다.
4. **Build and deployment**에서 `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, 폴더는 `/ (root)`를 선택하고 저장합니다.
6. 잠시 후 표시되는 GitHub Pages 주소로 접속합니다.

## 방문자 통계(Google Analytics 4)

1. Google Analytics에서 웹 데이터 스트림을 만들고 측정 ID(`G-XXXXXXXXXX`)를 확인합니다.
2. `js/config.js`를 열고 `googleAnalyticsId`의 빈 문자열에 측정 ID를 입력합니다.
3. 저장 후 GitHub에 다시 업로드/커밋합니다.
4. Google Analytics의 실시간 보고서에서 방문이 기록되는지 확인합니다.

측정 ID를 입력하지 않으면 통계 스크립트는 실행되지 않습니다. 자가점검 답변 및 개인별 결과는 Analytics로 전송하지 않도록 구성했습니다. 실제 운영 전에는 개인정보 처리방침과 쿠키/분석 도구 고지 요건을 확인하세요.

## 부분 수정 방법

- 색상/폰트/여백: `css/style.css` 상단의 `:root` 변수부터 확인
- 안내 문구/질문/자가점검 기능: `js/app.js`
- 지도 내용: `js/map-embed.js` (기존 파일에 포함된 지도 콘텐츠)
- 첫 방문 만화: `js/comic.js`
- 통계 ID: `js/config.js`

## 주의

- 원본 파일은 별도로 보관하고, 수정 전 GitHub에서 커밋 기록을 남기는 것을 권장합니다.
- 지도는 기존 HTML에 내장된 자료를 그대로 보존했습니다. 외부 지도 서비스의 정책이나 연결 상태에 따라 별도 점검이 필요할 수 있습니다.
