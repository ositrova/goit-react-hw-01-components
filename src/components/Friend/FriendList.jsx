import { Friend } from './Friend';


export const FriendList = ({ friends }) => {
    return (
        <ul>
             {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend
          key={id}
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
        </ul> 
    );
};