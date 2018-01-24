Back to [Root](../../README.md)

# SearchBar

### Description

### Usage

**SearchBar** is suitable for both automatic filtering and searching. 

### API

#### SelectOrderList

| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| onSearch                 | function          | required                                 | Callback function for searched keyword   |
| onCloseClick             | function          |                                          | Callback function for clearing keyword   |
| inputClassName           | string            | ''                                       | class for input                          |
| searchPlaceHolder        | strings           | 'Search...'                              | Placeholder                              |
| value                    | strings           | ''                                       | Default keyword                          |
| dynamicSearchStartsFrom  | strings           | 0                                        | 0, if not dynamic search is off. Otherwise dynamic search starts when keyword is long enough. |
| tooltip                  | strings           | ''                                       | Tooltip for the serach bar. Tooltip is recommened when **dynamicSearchStartsFrom** is greater than 0. |
| tooltipDelay             | number            | 0                                        | A millisecond delay amount to show and hide the tooltip once triggered. |

### Code example

```jsx
```

