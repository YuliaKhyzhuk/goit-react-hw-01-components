import PropTypes from 'prop-types';
import { FriendCard } from 'components/FriendCard/FriendCard';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendCard friend={friend} />
        </li>
      ))}
    </ul>
  );
};


// FriendList.propTypes = {
//     id: PropTypes.number.isRequired,
// }
// Запитання до ментора: так норм вказати id в prop-types? Чи треба деструктузизувати

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}