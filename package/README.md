# Codersrank Education Widget

<!-- DOCS_START -->

Codersrank Education Widget is a web component that allows you easily integrate education information from your [CodersRank](https://codersrank.io) profile to your personal website:

<img src="preview.png" />

## Install from NPM

Widget script available through NPM:

```
npm i @codersrank/education --save
```

After installation you need to import and register web component:

```js
import CodersrankEducation from '@codersrank/education';

// register web component as <codersrank-education> element
window.customElements.define('codersrank-education', CodersrankEducation);
```

## Install from CDN

Widget can also be downloaded or linked directly from CDN:

```html
<!-- replace x.x.x with actual version -->
<script src="https://unpkg.com/@codersrank/education@x.x.x/codersrank-education.min.js"></script>
```

In this case it is not required to register web component, it is already registered as `<codersrank-education>` element.

## Usage

As it is a web component the usage is pretty simple, just add widget HTML tag with your [CodersRank](https://codersrank.io) username

```html
<codersrank-education username="YOUR_USERNAME"></codersrank-education>
```

## Widget Attributes

Widget supports following properties as HTML element attributes:

| Name                         | Type      | Default             | Description                                                                               |
| ---------------------------- | --------- | ------------------- | ----------------------------------------------------------------------------------------- |
| `username`                   | `string`  |                     | Your [CodersRank](https://codersrank.io) username                                         |
| `max-items`                  | `number`  |                     | Limit number of education and certificates items to display                               |
| `grid`                       | `boolean` | `false`             | Enables grid layout. Number of columns is configurable with `--grid-columns` CSS variable |
| `education`                  | `boolean` | `true`              | Defines whether to show education section                                                 |
| `certificates`               | `boolean` | `true`              | Defines whether to show certificates section                                              |
| `certificates-link`          | `boolean` | `true`              | Defines whether to show certificate link                                                  |
| `certificates-link`          | `string`  | `See certification` | Certificate link text                                                                     |
| `education-section-title`    | `string`  | ``                  | Education section title                                                                   |
| `certificates-section-title` | `string`  | ``                  | Certificates section title                                                                |
| `branding`                   | `boolean` | `true`              | Displays "Powered by CodersRank" link                                                     |

For example:

```html
<codersrank-education
  username="YOUR_USERNAME"
  certificates="false"
></codersrank-education>
```

## Styling

It is possible to customize widget colors with CSS Custom Properties (CSS Variables) by setting them directly on the widget element with style attribute or in CSS.

There are following CSS Custom Properties are available:

| Property                                    | Value         |
| ------------------------------------------- | ------------- |
| `--preloader-color`                         | `#72a0a8`     |
| `--item-spacing`                            | `1em`         |
| `--item-border-radius`                      | `0px`         |
| `--item-border`                             | `none`        |
| `--item-padding`                            | `0px`         |
| `--item-bg-color`                           | `transparent` |
| `--grid-columns`                            | `1`           |
| `--title-font-size`                         | `1.15em`      |
| `--title-font-weight`                       | `bold`        |
| `--title-text-color`                        | `inherit`     |
| `--title-opacity`                           | `1`           |
| `--details-text-color`                      | `inherit`     |
| `--details-opacity`                         | `1`           |
| `--details-font-size`                       | `inherit`     |
| `--details-font-weight`                     | `inherit`     |
| `--date-text-color`                         | `inherit`     |
| `--date-opacity`                            | `0.55`        |
| `--date-font-size`                          | `inherit`     |
| `--date-font-weight`                        | `inherit`     |
| `--description-font-size`                   | `inherit`     |
| `--description-font-weight`                 | `inherit`     |
| `--description-text-color`                  | `inherit`     |
| `--description-opacity`                     | `1`           |
| `--section-title-text-color`                | `inherit`     |
| `--section-title-opacity`                   | `1`           |
| `--section-title-font-size`                 | `1.5em`       |
| `--section-title-font-weight`               | `bold`        |
| `--certificate-link-font-size`              | `0.85em`      |
| `--certificate-link-font-weight`            | `inherit`     |
| `--certificate-link-opacity`                | `1`           |
| `--certificate-link-text-color`             | `#72a0a8`     |
| `--certificate-link-text-decoration`        | `none`        |
| `--certificate-link-text-transform`         | `uppercase`   |
| `--certificate-link-hover-text-decoration`  | `underline`   |
| `--certificate-link-hover-text-color`       | -             |
| `--certificate-link-active-text-color`      | -             |
| `--certificate-link-active-text-decoration` | -             |
| `--branding-text-color`                     | `inherit`     |

For example, to change education (and certificate) item title color to `purple` and font-size to `20px`, add this to CSS stylesheet:

```css
codersrank-education {
  --title-text-color: purple;
  --title-font-size: 20px;
}
```

## Use As Image

It is also possible to insert Education widget as an image. It is useful in places where you can't integrate web component, or for example on your GitHub profile README.md page.

Image URL is the following:

```
https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=education&username=YOUR_USERNAME
```

It accepts all widget attributes as query string parameters, plus one extra parameter:

| Name    | Type     | Default | Description                                                                                                                                                                     |
| ------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `width` | `number` | `800`   | Width of widget element (generated image). Note that generated image has @2x pixel density, so the PNG image will be actually generated in @2x size from the one specified here |
| `style` | `string` |         | `style` attribute value (here you can specify all CSS variables)                                                                                                                |

For example:

```html
<img
  src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=education&username=YOUR_USERNAME&max-items=2&certificates=false&style=--item-bg-color:%23f00;--item-border-radius:10px"
/>
```

Note that you need to URL Encode some of the characters, for example `#` should be `%23` and `#ff0` color should be specified as `%23ff0` in query.

## Contribution

Yes please! See the [contributing guidelines](https://github.com/codersrank-org/education-widget/blob/master/CONTRIBUTING.md) for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/codersrank-org/education-widget/blob/master/LICENSE).
