import { useChallenge } from '../context/ChallengeContext';

export const CompletedChallenge = () => {
  const { challengesCompleted } = useChallenge();

  return (
    <div className="completed__challenge__container">
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};