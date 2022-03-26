import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from '../tabs';
import Restaurant from '../restaurant';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';
import { Route, Switch } from 'react-router';

const Restaurants = ({
  restaurants,
  loading,
  loaded,
  loadRestaurants,
  match,
}) => {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loadRestaurants, loading, loaded]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    to: `/restaurants/${id}/menu`,
  }));

  return (
    <div>
      <Tabs tabs={tabs} />
      <Switch>
        <Route path="/restaurants/:restId">
          {({ match }) => <Restaurant id={match.params.restId} />}
        </Route>
        <Route>
          <p style={{ textAlign: 'center' }}>Select restaurant</p>
        </Route>
      </Switch>
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
