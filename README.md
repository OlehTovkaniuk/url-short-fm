# URL shortening API

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshot.jpg)

### Links

[Live Site URL](http://url-short-fm-olehtovkaniuk.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- [Styled Components](https://styled-components.com/) - For styles
- CSS Flexbox
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/) - for site navigation


### What I learned

### Continued development


### Useful resources

- ["3 Ways To Implement Responsive Design In Your React App" by Joe Keohan](https://itnext.io/3-ways-to-implement-responsive-design-in-your-react-app-bcb6ee7eb424) - I used the inline styles approach from this article to make the webpage responsive. I believe this is more straightforward way than media queries because with inline styles I manage responsivenes by using useState and useEffect hooks and passing the state of the screen to any component what I want without need to repeat 'media screen' for every div which I want to change.

