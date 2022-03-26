import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating, match }) => {
  const { id, name, menu, reviews } = restaurant;

  const tabs = [
    { title: 'Menu', to: `/restaurants/${id}/menu` },
    { title: 'Reviews', to: `/restaurants/${id}/reviews` },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} />
      <Switch>
        <Route path="/restaurants/:restId/menu">
          <Menu menu={menu} restaurantId={id} />
        </Route>
        <Route path="/restaurants/:restId/reviews">
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>
        <Redirect to="/restaurants/:restId/menu" />
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
