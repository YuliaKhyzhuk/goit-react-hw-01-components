// import { ProfileList } from './ProfileList/ProfileList';
import { ProfileCard } from 'components/ProfileCard/ProfileCard';
import user from '../data/user.json';

import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

// export const App = () => {
//   return (
//     <>
//       <ProfileList users={user} />
//     </>
//   );
// };

// export const App = () => {
//   return (<>
//   <ProfileList user={user} />
//   <FriendList friends={friends} />
//   </>);
// };


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
  </>);
};