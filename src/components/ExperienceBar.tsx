import { useChallenge } from "../context/ChallengeContext";

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useChallenge();

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className="experience__bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className="current__experience" style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};