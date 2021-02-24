import { useContext } from "react"
import { ChallengeContext } from "../context/ChallengeContext"

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext)

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
              <button type="button" className="btn__fail" onClick={resetChallenge}>Falhei</button>
              <button type="button" className="btn__success">Completei</button>
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
  )
}