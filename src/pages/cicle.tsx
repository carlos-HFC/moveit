import { GetServerSideProps } from "next";
import Head from "next/head";

import { ChallengeBox, CompletedChallenge, Countdown, ExperienceBar, Profile } from "../components";
import { ChallengeProvider } from "../context/ChallengeContext";
import { CountdownProvider } from "../context/CountdownContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  user: User;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider {...props}>
      <div className="container">
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile user={props.user} />
              <CompletedChallenge />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  );
}

/**
 * DEVE SER OBRIGATORIAMENTE ESTE NOME E PRECISA SER ASSÍNCRONA
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, user } = ctx.req.cookies;

  if (user === 'undefined' || !user) {
    return {
      props: {},
      redirect: {
        destination: "/"
      },
    };
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      user: user === 'undefined' || user === undefined ? null : user
    }
  };
};