import { ChallengeProvider } from '../context/ChallengeContext'

import '../css/global.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )

}

export default MyApp
