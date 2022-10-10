import { useChallenge } from '../context/ChallengeContext';

type ProfileProps = {
  user: User;
};

export const Profile = (props: ProfileProps) => {
  const { level } = useChallenge();

  const user = ((String(props.user) !== 'undefined') || props.user !== undefined) && JSON.parse(String(props?.user));

  return (
    <div className="profile__container">
      <img src={user?.avatar_url} alt={user?.name} />
      <div>
        <strong>{user?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
