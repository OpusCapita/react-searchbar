import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { 
  Button,
  FormControl,
} from 'react-bootstrap';

import SearchBar from '../../src/searchbar/index';

describe('Searchbar component', () => {

  function testEnter(result, value = '', dynamicSearchStartsFrom = 0) {
    const props = {
      dynamicSearchStartsFrom,
      value,
      onSearch: sinon.spy(),
    };
    const wrapper = mount(<SearchBar {...props} />);
    const formControl = wrapper.find(FormControl);
    formControl.simulate('keyDown', { keyCode: 13 });
    expect(props.onSearch.called).to.eql(result);
  }

  it('should enable search button and execute search for correct keyword', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<SearchBar onSearch={onChange} />);

    const button = wrapper.find(Button);
    expect(button).to.have.length(1);
    expect(button.is('[disabled]')).to.be.true;
    const input = wrapper.find('input[type="search"]');
    expect(input).to.have.length(1);
    input.simulate('change', {
      target: {
        value: 'Where',
      },
    });
    button.simulate('click');
    expect(onChange.calledWith('Where')).to.be.true;
    wrapper.unmount();
  });

  it('should execute dynamic search for correct keywords', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<SearchBar onSearch={onChange} dynamicSearchStartsFrom={3} />);

    const input = wrapper.find('input[type="text"]');
    expect(input).to.have.length(1);
    input.simulate('change', { target: { value: 'W' } });
    input.simulate('change', { target: { value: 'Wh' } });
    input.simulate('change', { target: { value: 'Whe' } });
    input.simulate('change', { target: { value: 'Wher' } });
    input.simulate('change', { target: { value: 'Where' } });
    expect(onChange.withArgs('W').callCount).to.equal(0);
    expect(onChange.withArgs('Wh').callCount).to.equal(0);
    expect(onChange.withArgs('Whe').calledOnce).to.be.true;
    expect(onChange.withArgs('Wher').calledOnce).to.be.true;
    expect(onChange.withArgs('Where').calledOnce).to.be.true;
  });

  it('should execute search with ENTER', () => {
    testEnter(true, 'Laptop');
  });

  it('should not execute search with ENTER', () => {
    testEnter(false);
    testEnter(false, 'Laptop', 2);
  });
});
