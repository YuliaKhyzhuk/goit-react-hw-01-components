import { FriendCard } from 'components/FriendCard/FriendCard';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendCard friend={friend} />
        </li>
      ))}
    </ul>
  );
};
