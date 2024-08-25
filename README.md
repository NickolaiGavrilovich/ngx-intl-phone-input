# International Telephone Input for Angular (NgxIntlPhoneInput)

An Angular package for entering and validating international telephone numbers. It adds a flag dropdown to any input, detects the user's country, displays a relevant placeholder and provides formatting/validation methods. Also package can use mask for phones.

**Compatibility:**

Validation with [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber)


| ngx-intl-phone-input | Angular | ngx-bootstrap |
| ------------------ | ------- | ------------- |
| 18.x.x             | 18.x.x  | >= 18.0.0     |

## Installation

### Install Dependencies

`$ npm install intl-tel-input@18.0.5 --save`

`$ npm install google-libphonenumber --save`

`$ ng add ngx-bootstrap`

If you do not wish to use Bootstrap's global CSS, we now package the project with only the relevant
bootstrap styling needed for the dropdown. As such, you can remove the bootstrap styling from `angular.json`.

Further, Angular CLI should tree-shake the rest of Ngx-Boostrap away if you don't utilize other dependencies from
the bootstrap package. This should keep this dependency a lean feature-add

### Add Dependency Style

Add _'ngx-intl-phone-input'_ style file:

```
./node_modules/ngx-intl-phone-input/build/css/intlTelInput.css
./node_modules/ngx-intl-phone-input/src/lib/bootstrap-dropdown.css
./node_modules/ngx-intl-phone-input/src/lib/ngx-intl-phone-input.component.css
```

to **angular.json** styles array or main **styles.css**

### Install This Library

`$ npm install ngx-intl-phone-input --save`

## Usage

### Import

Add `NgxIntlPhoneInputModule` to your module file:

```javascript
imports: [NgxIntlPhoneInputModule];
```

## Example

Refer to main app in this repository for working example.

Or this:

[Stackblitz Demo (Angular 12)](https://stackblitz.com/edit/ngx-intl-phone-input-demo-ng-12)

```html
<form #f="ngForm" [formGroup]="phoneForm">
	<ngx-intl-phone-input
		[cssClass]="'custom'"
		[preferredCountries]="[CountryISO.UnitedStates, CountryISO.UnitedKingdom]"
		[enableAutoCountrySelect]="false"
		[enablePlaceholder]="true"
		[searchCountryFlag]="true"
		[searchCountryField]="[SearchCountryField.Iso2, SearchCountryField.Name]"
		[selectFirstCountry]="false"
		[selectedCountryISO]="CountryISO.India"
		[maxLength]="15"
		[phoneValidation]="true"
		[inputId]="my-input-id"
		name="phone"
		formControlName="phone"
	></ngx-intl-phone-input>
</form>
```

## Options


| Options                  | Type      | Default                           | Description                                                                                                  |
| ------------------------ | --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| cssClass                 | `string`  | `control-form`                    | Bootstrap input css class or your own custom one.                                                            |
| preferredCountries       | `[]`      | `[]`                              | List of countries, which will appear at the top.                                                             |
| onlyCountries            | `[]`      | `[]`                              | List of manually selected countries, which will appear in the dropdown.                                      |
| enableAutoCountrySelect  | `boolean` | `true`                            | Toggle automatic country (flag) selection based on user input.                                               |
| enablePlaceholder        | `boolean` | `true`                            | Input placeholder text, which adapts to the country selected.                                                |
| customPlaceholder        | `string`  | `None`                            | Custom string to be inserted as a placeholder.                                                               |
| numberFormat             | ``        | `PhoneNumberFormat.International` | Custom string to be inserted as a placeholder.                                                               |
| searchCountryFlag        | `boolean` | `false`                           | Enables input search box for countries in the flag dropdown.                                                 |
| searchCountryField       | `[]`      | `[SearchCountryField.All]`        | Customize which fields to search in, if`searchCountryFlag` is enabled. Use `SearchCountryField` helper enum. |
| searchCountryPlaceholder | `string`  | `'Search Country'`                | Placeholder value for`searchCountryField`                                                                    |
| maxLength                | `number`  | `None`                            | Add character limit.                                                                                         |
| selectFirstCountry       | `boolean` | `true`                            | Selects first country from`preferredCountries` if is set. If not then uses main list.                        |
| phoneValidation          | `boolean` | `true`                            | Disable phone validation.                                                                                    |
| inputId                  | `string`  | `phone`                           | Unique ID for`` element.                                                                                     |
| selectedCountryISO       | ``        | `None`                            | Set specific country on load.                                                                                |
| separateDialCode         | `boolean` | `false`                           | Visually separate dialcode into the drop down element.                                                       |
| countryChange            | ``        | `None`                            | Emits country value when the user selects a country from the dropdown.                                       |
| useMask                  | `boolean` | `false`                           | Adds a mask to the input field based on the selected country or international code and operator              |
| showMaskTyped            | `boolean` | `false`                           | Display the mask as a placeholder                                                                            |

asdasd

## Supported Formats

Following formats are supported

- NATIONAL // Produces "044 668 18 00"
- INTERNATIONAL // Produces "+41 44 668 18 00"
- E164 // Produces "+41446681800"

## Library Contributions

- Fork repo.
- Update `./projects/ngx-intl-phone-input`
- Build / test library.
- Update `./src/app` with new functionality.
- Update README.md
- Pull request.

### Helpful commands

- Build lib: `$ npm run build_lib`
- Copy license and readme files: `$ npm run copy-files`
- Create package: `$ npm run npm_pack`
- Build lib and create package: `$ npm run package`

### Use locally

After building and creating package, you can use it locally too.

In your project run:

`$ npm install --save {{path to your local '*.tgz' package file}}`
