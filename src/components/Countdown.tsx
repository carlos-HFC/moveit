import { useContext, useEffect, useState } from 'react'
import { ChallengeContext } from '../context/ChallengeContext'

let countdownTimeout: NodeJS.Timeout

export const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [time, setTime] = useState(25 * 60)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  // padStart(length, 'string') faz com que a string tenha um tamanho informado e inicie com a string passada. No caso, a string terá 2 caracteres e iniciará com zero
  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
  }

  return (
    <>
      <div className="countdown__container">
        <div>
          <span>{minLeft}</span>
          <span>{minRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secLeft}</span>
          <span>{secRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className="countdown__btn">
          Ciclo encerrado <img src="icons/check.svg" alt="" />
        </button>
      ) : (
          <>
            {isActive
              ? (
                <button type="button" className="countdown__btn countdown__btn-active" onClick={resetCountdown}>
                  Abandonar ciclo <img src="icons/close.svg" alt="" />
                </button>
              ) : (
                <button type="button" className="countdown__btn" onClick={startCountdown}>
                  Iniciar um ciclo
                </button>
              )
            }
          </>
        )}
    </>
  )
}