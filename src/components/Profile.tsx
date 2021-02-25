import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengeContext'

export const Profile = () => {
  const { level } = useContext(ChallengeContext)

  return (
    <div className="profile__container">
      <img src="https://github.com/carlos-hfc.png" alt="Carlos Faustino" />
      <div>
        <strong>Carlos Faustino</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
