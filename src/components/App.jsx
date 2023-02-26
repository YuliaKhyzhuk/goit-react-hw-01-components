// import { ProfileList } from './ProfileList/ProfileList';
import PropTypes from 'prop-types';
import { ProfileCard } from 'components/ProfileCard/ProfileCard';
import user from '../data/user.json';

import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import transactions from '../data/transactions.json';
import { Transactions } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (<>
  <ProfileCard
        username={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
  <FriendList friends={friends} />
  <Statistics stats={data} title={"Upload stats"} />
  <Transactions items={transactions} />
  </>);
};

user.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired,
};