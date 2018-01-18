import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { 
  Button,
} from 'react-bootstrap';

import SearchBar from '../../src/searchbar/index';

describe('Searchbar component', () => {
  it('should enable search button and execute search for correct keyword', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<SearchBar onSearch={onChange} />);

    const button = wrapper.find(Button);
    expect(button).to.have.length(1);
    expect(button.is('[disabled]')).to.be.true;
    const input = wrapper.find('input[type="search"]');
    // const input = wrapper.find('input');
    expect(input).to.have.length(1);
    input.simulate('change', {
      target: {
        value: 'Where',
      },
    });
    //expect(input.text()).equal('Where');
    //expect(button.is('[disabled]')).to.be.false;
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
});
