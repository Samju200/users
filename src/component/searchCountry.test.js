import React from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchCountry from './SearchCountry';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchCountry component', () => {
  it('renders without crashing', () => {
    shallow(<SearchCountry />);
  });

  it('renders a form', () => {
    const wrapper = shallow(<SearchCountry />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('renders a FaSearch icon', () => {
    const wrapper = shallow(<SearchCountry />);
    expect(wrapper.find(FaSearch).length).toEqual(1);
  });

  it('renders an input element', () => {
    const wrapper = shallow(<SearchCountry />);
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('input element should have a placeholder text of "Find in list"', () => {
    const wrapper = shallow(<SearchCountry />);
    expect(wrapper.find('input').prop('placeholder')).toEqual('Find in list');
  });

  it('input element should have a value that matches the inputValue prop', () => {
    const inputValue = 'test';
    const wrapper = shallow(<SearchCountry inputValue={inputValue} />);
    expect(wrapper.find('input').prop('value')).toEqual(inputValue);
  });

  it('input element should call handleInputSearch on change', () => {
    const handleInputSearch = jest.fn();
    const wrapper = shallow(
      <SearchCountry handleInputSearch={handleInputSearch} />
    );
    wrapper.find('input').simulate('change');
    expect(handleInputSearch).toHaveBeenCalled();
  });
});
