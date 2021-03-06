# Gutenberg Samples

[![CI Status](https://github.com/technote-space/gutenberg-samples/workflows/CI/badge.svg)](https://github.com/technote-space/gutenberg-samples/actions)
[![codecov](https://codecov.io/gh/technote-space/gutenberg-samples/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/gutenberg-samples)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/gutenberg-samples/badge)](https://www.codefactor.io/repository/github/technote-space/gutenberg-samples)
[![License: GPL v2+](https://img.shields.io/badge/License-GPL%20v2%2B-blue.svg)](http://www.gnu.org/licenses/gpl-2.0.html)
[![PHP: >=5.6](https://img.shields.io/badge/PHP-%3E%3D5.6-orange.svg)](http://php.net/)
[![WordPress: >=5.4](https://img.shields.io/badge/WordPress-%3E%3D5.4-brightgreen.svg)](https://wordpress.org/)

Gutenberg Samples

[Latest version](https://github.com/technote-space/gutenberg-samples/releases/latest/download/release.zip)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [Contents](#contents)
  - [dropdown1](#dropdown1)
  - [dropdown2](#dropdown2)
- [Requirements](#requirements)
- [Author](#author)
- [Plugin framework](#plugin-framework)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Contents
### dropdown1  
![dropdown1](https://raw.githubusercontent.com/technote-space/gutenberg-samples/master/screenshot-1.png)
  - Add Dropdown which has some `RichText Toolbar Buttons`
    - I used `Fill` and `Slot` to gather buttons and use for dropdown items.
    - Each format types's `edit` function creates `Fill` to register component.
    - Only first format type's `edit` function create component to use `Slot`  
    which provides some components that registered by `Fill` above,  
    which are pass to DropdownMenu's controls.
### dropdown2  
![dropdown2](https://raw.githubusercontent.com/technote-space/gutenberg-samples/master/screenshot-2.png)
  - Add Dropdown which has some `RichText Toolbar Buttons` using library.
  - Add color palette and font size picker to toolbar and inspector.
  - [Library](https://github.com/technote-space/register-grouped-format-type)

## Requirements
- \>= PHP 5.6
- \>= WordPress 5.4

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)

## Plugin framework
[WP Content Framework](https://github.com/wp-content-framework/core)
