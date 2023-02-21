// import { ProfileList } from './ProfileList/ProfileList';
// import user from '../user.json';

import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json'

// export const App = () => {
//   return (
//     <>
//       <ProfileList users={user} />
//     </>
//   );
// };

export const App = () => {
  return <>
  <FriendList friends={friends} />
  </>;
};