import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsListSelector } from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

const Restaurants = ({ restaurants, loadRestaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    restaurants[0]?.id
  );

  const activeId = activeRestaurantId || restaurants[0]?.id;

  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  const tabs = restaurants.map(({ id, name }) => ({ id, title: name }));

  return (
    <div>
      <Tabs tabs={tabs} activeId={activeId} onChange={setActiveRestaurant} />
      <Restaurant id={activeId} />
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

const mapStateToProps = state => ({
  restaurants: restaurantsListSelector(state),
});

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);
