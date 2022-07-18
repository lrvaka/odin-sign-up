# Odin Project - Sign-up form solution

This is a solution to the [Sign-up form project on Odin Project](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form). Odin Project is a web development pathway course.

## Table of contents

- [Odin Project - Sign-up form solution](#odin-project---sign-up-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

Completion of the Odin Project Sign Up form project in the Intermediate HTML and CSS section. I copied the design given in the instructions. My favorite part of the exercise was implementing the matching password check using javascript:

```js
passwordInput.addEventListener("input", (e) => {
  if (!confirmPasswordInput.value) return
  if (passwordInput.value != confirmPasswordInput.value) {
    passwordMsg.style.opacity = 1
    passwordInput.classList.add("isInvalid")
    confirmPasswordInput.classList.add("isInvalid")
  } else {
    passwordMsg.style.opacity = 0
    passwordInput.classList.remove("isInvalid")
    confirmPasswordInput.classList.remove("isInvalid")
  }
})

confirmPasswordInput.addEventListener("input", (e) => {
 /* copied the same code inside the previous event listener here */
})
```

### Screenshot

<img src="./screenshot.png" alt="drawing" width="300"/>

### Links

- [Live Site URL](https://lrvaka.github.io/odin-sign-up/)

## Author

- Website - [Luke Vakasisikakala](https://lrvaka.com/)

## Acknowledgments

Mum.
