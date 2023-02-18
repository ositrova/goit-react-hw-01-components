import PropTypes from 'prop-types';

export const Friend = ({avatar, name, isOnline}) => {
    return (
        <li>
     <span>{isOnline}</span>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
    </li>
    );
};


Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     isOnline: PropTypes.bool.isRequired,
}

