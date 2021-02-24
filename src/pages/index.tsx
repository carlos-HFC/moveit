import Head from "next/head";
import { ChallengeBox, CompletedChallenge, Countdown, ExperienceBar, Profile } from "../components";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div className="container__left">
          <Profile />
          <CompletedChallenge />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
