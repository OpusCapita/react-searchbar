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

### Change log
View the [Change log](CHANGELOG.md)

### Migrate guide
View the [Migrate guide](MIGRATEGUIDE.md) between major versions

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name          | Type      | Default / Parameter | Description                                                             |
| ------------------ | ----------| ------------------- | ----------------------------------------------------------------------- |
| id                 | string    | oc-react-searchbar  | ID prefix of HTML components                                            |
| className          | string    | ''                  | Component class                                                         |
| inputClassName     | string    | ''                  | Class for input                                                         |
| defaultValue       | strings   | ''                  | Default keyword                                                         |
| minChars           | number    | 0                   | Minimum chars allowed to search                                         |
| tooltipDelay       | number    | 0                   | A millisecond delay amount to show and hide the tooltip once triggered. |
| allowEmptySearch   | bool      | false               | Enables search button even if the search query is empty                 |
| isDynamic          | boolean   | false               | Dynamic search enables automatic searching                              |
| isTooltipEnabled   | boolean   | false               | Is tooltip visible                                                      |
| onSearch           | function  | (keyword: string)   | Callback function for searched keyword                                  |
| onClear            | function  | ()                  | Callback function for clearing keyword                                  |
| translations       | object    | { tooltip: '', searchPlaceHolder: 'Search...' } | Translations object                         |

### Code example
```jsx
import React from 'react';
import SearchBar from '@opuscapita/react-searchbar';

export default class ReactView extends React.Component {
  render() {
    return (
      <SearchBar
        onSearch={this.handleSearch}
      />
    );
  }
}
```
