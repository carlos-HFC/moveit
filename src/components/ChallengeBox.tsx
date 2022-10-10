import { useChallenge } from "../context/ChallengeContext";
import { useCountdown } from "../context/CountdownContext";

export const ChallengeBox = () => {
  const { activeChallenge, completeChallenge, resetChallenge } = useChallenge();
  const { resetCountdown } = useCountdown();

  function handleChallengeSuccess() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFail() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className="challenge__container">
      {activeChallenge
        ? (
          <div className="challenge__active">
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="" />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button type="button" className="btn__fail" onClick={handleChallengeFail}>Falhei</button>
              <button type="button" className="btn__success" onClick={handleChallengeSuccess}>Completei</button>
            </footer>
          </div>
        ) : (
          <div className="challenge__notActive">
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
              Avance de level completando desafios.
            </p>
          </div>
        )}
    </div>
  );
};