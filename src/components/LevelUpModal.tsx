import { useChallenge } from "../context/ChallengeContext";

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useChallenge();

  return (
    <div className="overlay">
      <div className="overlay__container">
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
};