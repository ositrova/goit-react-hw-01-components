import React from 'react';
import PropTypes from 'prop-types';
import {Container, Description, Avatar, Name, Tag, Location, Stats, Item, Label, Quantity} from './Profile.styled'

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return <Container>
  <Description>
    <Avatar
      src={avatar}
      alt={name}
    />
    <Name>{name}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <Item>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </Item>
    <Item>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </Item>
    <Item>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </Item>
  </Stats>
</Container>

};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
};

Profile.defaultProps = {
  name: 'User name',
  tag: '@User tag',
  location: 'User location',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  stats: {
    followers: '0',
    views: '0',
    likes: '0',
  },
};