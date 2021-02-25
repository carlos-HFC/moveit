import Head from "next/head";
import { ChallengeBox, CompletedChallenge, Countdown, ExperienceBar, Profile } from "../components";
import { CountdownProvider } from "../context/CountdownContext";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenge />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
