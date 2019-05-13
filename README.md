# Gutenberg Samples

[![License: GPL v2+](https://img.shields.io/badge/License-GPL%20v2%2B-blue.svg)](http://www.gnu.org/licenses/gpl-2.0.html)
[![PHP: >=5.6](https://img.shields.io/badge/PHP-%3E%3D5.6-orange.svg)](http://php.net/)
[![WordPress: >=5.1](https://img.shields.io/badge/WordPress-%3E%3D5.1-brightgreen.svg)](https://wordpress.org/)

Gutenberg Samples
- dropdown1  
![dropdown1](https://raw.githubusercontent.com/technote-space/gutenberg-samples/master/screenshot-1.png)
  - Add Dropdown which has some `RichText Toolbar Buttons`
    - I use `Fill` and `Slot` to gather buttons and use for dropdown items.
    - Each format types's `edit` function creates `Fill` to register component.
    - Only first format type's `edit` function create component to use `Slot`  
    which provides some components that registered by `Fill` above,  
    which are pass to DropdownMenu's controls.
- dropdown2  
![dropdown2](https://raw.githubusercontent.com/technote-space/gutenberg-samples/master/screenshot-2.png)
  - Add Dropdown which has some `RichText Toolbar Buttons` using library
  - [library](https://github.com/technote-space/register-grouped-format-type)

## requirements
- \>= PHP 5.6
- \>= WordPress 5.1

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)

## Plugin framework
[WP Content Framework](https://github.com/wp-content-framework/core)
