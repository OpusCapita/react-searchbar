import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, number, object } from '@storybook/addon-knobs';
import { Store, StateDecorator } from '@sambego/storybook-state';

// Application
import './scss/app.component.scss';
import SearchBar from '../src/searchbar.component';
/* eslint-disable no-alert */
/* eslint-disable no-console */

const fruits = [
  'Longan',
  'Grapefruit',
  'Banana',
  'Pomegranate',
  'Papaya',
  'Rambutan',
  'Plum',
  'Gonzoberry',
  'Blackcurrant',
  'Honeyberry',
];
const store = new Store({ results: fruits });

storiesOf('@opuscapita/react-searchbar', module)
  .addDecorator(StateDecorator(store))
  .add('React Search Bar', () => (state) => {
    const onSearch = (query) => {
      const trim = str => str.trim().toLowerCase();
      const results = fruits.filter(fruit => trim(fruit).includes(trim(query)));
      store.set({ results });
    };

    const onClear = () => {
      store.set({ results: fruits });
    };

    const translations = {
      tooltip: 'Default tooltip text',
      searchPlaceHolder: 'Default placeholder',
    };

    const knobs = {
      defaultValue: text('Default value', undefined),
      minChars: number('Minimum chars before searching', 0),
      allowEmptySearch: boolean('Allow empty search', true),
      isDynamic: boolean('Is dynamic', false),
      isTooltipEnabled: boolean('Tooltip enabled', false),
      tooltipDelay: number('Tooltip delay', 0),
      translations: object('Translations', translations),
      onClear,
      onSearch,
    };

    return (
      <div className="search-bar-container">
        <SearchBar {...knobs} />
        <div className="search-results">
          <div className="title-container">
            <h2>Search results</h2><span>(Not part of react-searchbar)</span>
          </div>
          {state.results.length ?
            <ul>
              {state.results.map(result => <li key={result}>{result}</li>)}
            </ul> : <span>No search results</span>}
        </div>
      </div>
    );
  });
