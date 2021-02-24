import { useState } from 'react'
import { ChallengeContext, ChallengeProvider } from '../context/ChallengeContext'

import '../css/global.min.css'

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1)

  function levelUp() {
    setLevel(level + 1)
  }

  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )

}

export default MyApp
