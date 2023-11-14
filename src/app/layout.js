// prop-types
import PropTypes from 'prop-types';
// emotion
import EmotionProvider from './emotion';

export const metadata = {
  title: '월급 참견',
  description: "'월급 참견'은 예·적금 상품을 추천하는 웹사이트에요.",
  authors: 'GitHub - dango0812',
  keywords: '월급 참견, 돈관리, 돈관리앱, 카드, 카드추천, 신용카드추천, 체크카드추천, 적금추천, 예금추천, CMA추천, CMA통장추천, 보험비교, 보험비교사이트, 금리계산기, 금리비교사이트, 혜택많은신용카드, 신용카드비교, 체크카드비교, 월급참견, 월참, 적금, 예금',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* fonts */}
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          type="text/css"
          rel="stylesheet"
        />
      </head>
      <body>
        <EmotionProvider>
          {children}
        </EmotionProvider>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node
};
