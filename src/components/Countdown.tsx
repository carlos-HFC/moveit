import { useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext'

export const Countdown = () => {
  const { minutes, seconds, isActive, hasFinished, startCountdown, resetCountdown } = useContext(CountdownContext)

  // padStart(length, 'string') faz com que a string tenha um tamanho informado e inicie com a string passada. No caso, a string terá 2 caracteres e iniciará com zero
  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconds).padStart(2, '0').split('')

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
                  Iniciar um ciclo <img src="icons/play.svg" alt="" />
                </button>
              )
            }
          </>
        )}
    </>
  )
}