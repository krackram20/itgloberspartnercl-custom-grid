📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# CUSTOM GRID

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

This component displays five cards and allows them to be arranged in five diferent ways in desktop and six different ways in mobile. 

![image](https://user-images.githubusercontent.com/62782975/174902578-ba840f38-0bab-42df-a9b1-ec3ae909c54b.png)



## Layout Order
### Desktop
#### Grid 1

![image](https://user-images.githubusercontent.com/62782975/174391271-29f30902-8532-4f77-91ba-5295450d5472.png)

#### Grid 2

![image](https://user-images.githubusercontent.com/62782975/174391494-bc8667f8-bd34-4062-8a10-99a0e0550754.png)

#### Grid 3

![image](https://user-images.githubusercontent.com/62782975/174391545-aef5d970-74eb-4bcf-b2b2-256ced49a3ba.png)

#### Grid 4

![image](https://user-images.githubusercontent.com/62782975/174391602-a3cd5836-09bc-4d42-82cb-6ba82549ad12.png)

### Mobile

![image](https://user-images.githubusercontent.com/62782975/174391721-9deb561d-d3e9-4650-b149-f7026d392014.png)

![image](https://user-images.githubusercontent.com/62782975/174391750-179e2292-539c-4200-b99d-3b3ea6864927.png)






## Configuration 

In order to use this component you must:

1. Add the dependency `"itgloberspartnercl.grid-custom": "0.x"` to `manifest.json`;
2. Declare the block `cards-layout`.
3. Declare in children the `custom-grid-cards` blocks
Only `custom-grid-cards` blocks  can be rendered inside  `cards-layout`and only 5 cards can be used.



### `cards-layout` props

![image](https://user-images.githubusercontent.com/62782975/174901494-041327a5-09a0-43bc-bf3d-3594dd7e64de.png)


| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `GridTypeDesktop`      | `number`       | number of the grid type for desktop (see images above)     | `1`        |
| `GridTypeMobile`      | `number`       | number of the grid type for mobile (see images above)     | `1`        |


### `custom-grid-cards` props

![image](https://user-images.githubusercontent.com/62782975/174901553-a0ac649e-aec2-436e-be54-fdd44d0f995b.png)


| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `src`      | `string`       | path to the image         | `XXXXXX`        |
| `title`      | `stringr`       | title of card)     | `XXXXXX`        |
| `description`      | `string`       | brief explanation of the card   | `XXXXXX`        |
| `nameClass`      | `string`       |     css styling classname | `XXXXXX`        |
| `callToAction`      | `string`       | redirect url    | `XXXXXX`        |
| `buttonText`      | `string`       | call to action button text  | `XXXXXX`        |


## Customization

Custom css style must be done in the file `itgloberspartnercl.grid-custom.css`

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`

Thereafter, you should add a single column table with the available CSS handles for the app, like the one below. Note that the Handles must be ordered alphabetically.

| CSS Handles |
| ----------- | 
| `image (image__{nameClass})` | 
| `title (title__{nameClass})` | 
| `description (description__{nameClass})` | 
| `callToAction (callToAction__{nameClass})` | 
| `main__container (main__container__{nameClass})` |
| `button (button__{nameClass})` |



<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
