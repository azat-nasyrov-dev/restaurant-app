import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

const Restaurants = ({ restaurants, loading, loaded, loadRestaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    restaurants[0]?.id
  );

  const activeId = activeRestaurantId || restaurants[0]?.id;

  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loadRestaurants, loading, loaded]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

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
  loading: restaurantsLoadingSelector(state),
  loaded: restaurantsLoadedSelector(state),
});

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);
