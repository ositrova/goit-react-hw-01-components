import { Friend } from './Friend';
import { List } from './Friend.style';

export const FriendList = ({ friends }) => {
    return (
        <List>
             {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend
          key={id}
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
        </List> 
    );
};