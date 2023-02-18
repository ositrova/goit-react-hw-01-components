import React from 'react';
import PropTypes from 'prop-types';
import {Section, Title, StatList, Item, Label, Percentage} from './Statistics.style';

export const Statistics =({title, stats}) => {
  return ( 
    <Section>
  <Title>{title}</Title>

  <StatList>

  {stats.map(({ id, label, percentage }) => (
            <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage} %</Percentage>
            </Item>
          ))}
    
  </StatList>
</Section>
);
};

const getRandomHexColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ),
};


