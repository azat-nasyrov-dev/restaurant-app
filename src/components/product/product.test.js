import { mount } from 'enzyme';
import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

const getByDataId = (wrapper, dataId) => wrapper.find(`[data-id="${dataId}"]`);

const getProductsCount = wr => getByDataId(wr, 'product').length;
const getAmount = wr => getByDataId(wr, 'product-amount').text();
const increase = wr => getByDataId(wr, 'product-increment').simulate('click');
const decrease = wr => getByDataId(wr, 'product-decrement').simulate('click');

describe('Product', () => {
  it('should render', () => {
    const wrapper = mount(<Product product={product} />);
    expect(getProductsCount(wrapper)).toBe(1);
  });

  it('should init from 0 amount', () => {
    const wrapper = mount(<Product product={product} />);
    expect(getAmount(wrapper)).toBe('0');
  });

  it('should increment amount', () => {
    const wrapper = mount(<Product product={product} />);
    increase(wrapper);
    expect(getAmount(wrapper)).toBe('1');
  });

  it('should fetch data on mount', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });

  it('should init with amount 2', () => {
    const wrapper = mount(<Product product={product} initialCount={2} />);
    expect(getAmount(wrapper)).toBe('2');
  });

  it('should decrement amount', () => {
    const wrapper = mount(<Product product={product} initialCount={4} />);
    decrease(wrapper);
    expect(getAmount(wrapper)).toBe('3');
  });

  it("shouldn't decrement with 0 amount", () => {
    const wrapper = mount(<Product product={product} />);
    decrease(wrapper);
    expect(getAmount(wrapper)).toBe('0');
  });
});
