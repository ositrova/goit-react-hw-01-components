import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './Friend.style';

export const Friend = ({avatar, name, isOnline}) => {
    return (
        
        <Item>
     <Status status={isOnline ? 'green' : 'red'}></Status>
        <Avatar src={avatar} alt={name} />
        <Name>{name}</Name>
    </Item>
    );
};


Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     isOnline: PropTypes.bool.isRequired,
}

