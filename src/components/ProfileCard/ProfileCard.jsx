import PropTypes from 'prop-types';
import { ProfileContainer,Description,  Avatar, Tag, Location, StatsList, StatsListItem, Name, Label } from './ProfileCard.styled';

export const ProfileCard = ({ username, tag, location, avatar, followers, views, likes}) => {
    return (
    <ProfileContainer>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  
    <StatsList>
      <StatsListItem>
        <Label>Followers</Label>
        <span className="quantity">{followers}</span>
      </StatsListItem>
      <StatsListItem>
        <Label>Views</Label>
        <span className="quantity">{views}</span>
      </StatsListItem>
      <StatsListItem>
        <Label>Likes</Label>
        <span className="quantity">{likes}</span>
      </StatsListItem>
    </StatsList>
    </ProfileContainer>);
};

ProfileCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}