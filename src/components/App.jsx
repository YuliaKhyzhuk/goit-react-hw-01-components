import { ProfileList } from './ProfileList/ProfileList';
import user from '../data/user.json';

import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json';

// export const App = () => {
//   return (
//     <>
//       <ProfileList users={user} />
//     </>
//   );
// };

export const App = () => {
  return (<>
  <ProfileList user={user} />
  <FriendList friends={friends} />
  </>);
};