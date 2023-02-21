import { ProfileCard } from 'components/ProfileCard/ProfileCard';

export const ProfileList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.tag}>
          <ProfileCard user={user} />
        </li>
      ))}
    </ul>
  );
};

// export const ProfileList = ({user}) => {
//     return <div>ProfileList</div>
// }

// export const ProfileList = ({ user }) => {
//   return (
//     <div class="profile" key={user.tag}>
//       <div class="description">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//           alt="User avatar"
//           class="avatar"
//         />
//         <p class="name">Petra Marica</p>
//         <p class="tag">@pmarica</p>
//         <p class="location">Salvador, Brasil</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">1000</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">2000</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// };
