
import Profile from './Profile/Profile';
import user from './Profile/user.json';
export const App = () => {
  return (
    <div className="App">
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    </div>
  );
};
