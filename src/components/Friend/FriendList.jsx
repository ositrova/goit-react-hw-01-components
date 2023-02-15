import PropTypes from 'prop-types';
import { Friend } from './Friend';


export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
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