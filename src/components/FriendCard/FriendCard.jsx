import PropTypes from 'prop-types';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

FriendCard.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};