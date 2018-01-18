# react-searchbar
### [Demo](https://opuscapita.github.io/oc-common-ui/#/searchbar)

### [API](./src/searchbar/README.md)

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

### Development

* Run `npm install` to get the project's dependencies
* Run `npm run build` to produce minified version of the library
* Run `npm run dev` to produce development version of the library.
* Run `npm run test` to run tests

#### Contributing
* Make a new branch for the changes
* Update `CHANGELOG.md` file
* Commit changes (not `lib`)
* Make a pull request
* Merge the pull request and delete the development branch

#### Creating a new release
* Run `npm version [major|minor|patch]` [Info](https://docs.npmjs.com/cli/version)
* Run `npm publish`