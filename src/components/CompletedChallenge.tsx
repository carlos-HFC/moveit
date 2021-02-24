import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengeContext'

export const CompletedChallenge = () => {
  const { challengesCompleted } = useContext(ChallengeContext)

  return (
    <div className="completed__challenge__container">
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}