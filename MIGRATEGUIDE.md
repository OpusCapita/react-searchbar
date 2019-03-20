# Migrate guide between major versions

## v2
### Removed props
- `value`
- `onCloseClick`
- `dynamicSearchStartsFrom`
- `tooltip`
- `searchPlaceHolder`

### New props
- `defaultValue`
- `onClear`
- `minChars`
- `isDynamic`
- `isTooltipEnabled`
- `translations`

### Migrate guide
- Change `value` to `defaultValue`
- Change `onCloseClick` to `onClear`
- Move `searchPlaceHolder` and `tooltip` into `translations` prop as object with same keys
- Change `dynamicSearchStartsFrom` into `minChars` and add `isDynamic` prop
