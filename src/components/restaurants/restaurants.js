import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  const tabs = restaurants.map(({ id, name }) => ({ id, title: name }));

  return (
    <div>
      <Tabs
        tabs={tabs}
        activeId={activeRestaurantId}
        onChange={setActiveRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Restaurants;
