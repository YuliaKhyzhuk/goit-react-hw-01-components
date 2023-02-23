import { ProfileCard } from 'components/ProfileCard/ProfileCard';

export const ProfileList = ({ user }) => {
  return (
    <div>
      <ProfileCard
        username={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};

// export const ProfileList = ({user}) => {
//   return (
//     <ul>
//       {user => (
//         <li key={user.tag}>
//           <ProfileCard user={user} />
//         </li>
//       )}
//     </ul>
//   );
// };
