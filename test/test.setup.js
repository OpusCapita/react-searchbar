import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import mockStorage from './storage.mock';

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.

const exposedProperties = ['window', 'navigator', 'document'];
const jsdom = new JSDOM('');

global.localStorage = mockStorage();
global.sessionStorage = mockStorage();
global.document = jsdom.window.document;
global.window = jsdom.window;

Object.keys(global.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

Enzyme.configure({ adapter: new Adapter() });
