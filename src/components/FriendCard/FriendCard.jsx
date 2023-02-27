import PropTypes from 'prop-types';
import {Container, Status} from './FriendCard.styled';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Container>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Container>
  );
};

FriendCard.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};