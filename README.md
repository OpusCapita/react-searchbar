# react-searchbar

### Description
**SearchBar** is suitable for both automatic filtering and searching. 

There is two different use cases for the search bar:
1. Search is started automatically after user's input.
* In this case the user does not need to press the search icon (magnifier) to start the search and thus the icon is shown as gray with white background. 
* In this case the search bar should also have a parameter that can be used to adjust how many caharacters needs to be inputted after the search is started automatically. The default value for that parameter is 3 characters.
* After the user has inputted the first character the search icon is changed to X -icon, which the user can click to clear all characters.

2. Search is started only after the user clicks the search icon.
* The search icon is shown in this case as white with dark gray background.
* After the user has clicked the search icon the icon changes to X-icon, which the user can click to clear all characters.
* If the user then modifies the inputted string, the X-icon is changed back to the search icon.
* User should be able to move the keyboard focus to both input and icon area separately.

### Installation
```
npm install @opuscapita/react-searchbar
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-searchbar)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | string            | oc-react-searchbar                       | ID prefix of HTML components             |
| onSearch                 | function          | required                                 | Callback function for searched keyword   |
| onCloseClick             | function          |                                          | Callback function for clearing keyword   |
| inputClassName           | string            | ''                                       | class for input                          |
| searchPlaceHolder        | strings           | 'Search...'                              | Placeholder                              |
| value                    | strings           | ''                                       | Default keyword                          |
| dynamicSearchStartsFrom  | strings           | 0                                        | 0, if not dynamic search is off. Otherwise dynamic search starts when keyword is long enough. |
| tooltip                  | strings           | ''                                       | Tooltip for the serach bar. Tooltip is recommened when **dynamicSearchStartsFrom** is greater than 0. |
| tooltipDelay             | number            | 0                                        | A millisecond delay amount to show and hide the tooltip once triggered. |
| allowEmptySearch         | bool              | false                                    | Enables search button even if the search query is empty |

### Code example
```jsx
import React from 'react';
import SearchBar from '@opuscapita/react-searchbar';

export default class ReactView extends React.Component {
  render() {
    return (
      <SearchBar
        onSearch={this.handleSearch}
        value={this.state.searchValue}
      />
    );
  }
}
```
