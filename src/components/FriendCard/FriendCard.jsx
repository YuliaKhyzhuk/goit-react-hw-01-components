export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </div>
  );
};
