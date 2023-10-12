# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshots/Screenshot-1.png)
![](./screenshots/Screenshot-13.png)
![](./screenshots/Screenshot-14.png)
![](./screenshots/Screenshot-2.png)
![](./screenshots/Screenshot-3.png)
![](./screenshots/Screenshot-4.png)
![](./screenshots/Screenshot-5.png)
![](./screenshots/Screenshot-6.png)
![](./screenshots/Screenshot-7.png)
![](./screenshots/Screenshot-8.png)
![](./screenshots/Screenshot-9.png)
![](./screenshots/Screenshot-10.png)
![](./screenshots/Screenshot-11.png)
![](./screenshots/Screenshot-12.png)
![](./screenshots/Screenshot-15.png)
![](./screenshots/Screenshot-16.png)
![](./screenshots/Screenshot-17.png)
![](./screenshots/Screenshot-18.png)
![](./screenshots/Screenshot-19.png)
![](./screenshots/Screenshot-20.png)
![](./screenshots/Screenshot-21.png)
![](./screenshots/Screenshot-22.png)
![](./screenshots/Screenshot-23.png)
![](./screenshots/Screenshot-24.png)
![](./screenshots/Screenshot-25.png)
![](./screenshots/Screenshot-26.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://aik-space-tourism.vercel.app/home)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Tailwind CSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned
Two major things I learnt was how to add custom tailwind styles specified in tailwind.config.js, and how to add audio using html audio and React useRef.

```html
    <audio ref={audio} src={SpaceMusic} />
```
```css
  theme: {
    extend: {
      backgroundImage: {
        'home-mobile': "url(/src/Data/images/home/background-home-mobile.jpg)",
        'home-tablet': "url(/src/Data/images/home/background-home-tablet.jpg)",
        'home-desktop': "url(/src/Data/images/home/background-home-desktop.jpg)",

        'destination-mobile': "url(/src/Data/images/destination/background-destination-mobile.jpg)",
        'destination-tablet': "url(/src/Data/images/destination/background-destination-tablet.jpg)",
        'destination-desktop': "url(/src/Data/images/destination/background-destination-desktop.jpg)",

        'crew-mobile': "url(/src/Data/images/crew/background-crew-mobile.jpg)",
        'crew-tablet': "url(/src/Data/images/crew/background-crew-tablet.jpg)",
        'crew-desktop': "url(/src/Data/images/crew/background-crew-desktop.jpg)",

        'technology-mobile': "url(/src/Data/images/technology/background-technology-mobile.jpg)",
        'technology-tablet': "url(/src/Data/images/technology/background-technology-tablet.jpg)",
        'technology-desktop': "url(/src/Data/images/technology/background-technology-desktop.jpg)",

      },
      colors: {
        'white': "#ffffff",
        'light-blue': "#d0d6f9",
        'dark-blue': "#0b0d17"
      },
      fontSize: {
        'very-big': "150px",
        'big': "100px",
        'medium': "56px",
        'small-medium': "32px",
        'smallest-medium': "28px",
        'small': "16px",
        'smallest': "14px",        

      },
      fontFamily: {
        'font-one': "Bellefair, serif",
        'font-two': "Barlow Condensed, sans-serif",
      },
      backgroundSize: {
        '100%': "100%"
      }
    },
}
```
```js
const audio= React.useRef();
```

### Useful resources

- [Example resource 1](https://tailwindcss.com/docs/theme#customizing-the-default-theme) - This helped me add custom tailwind styles specified in tailwind.config.js. I really liked this pattern and will use it going forward.
- [Example resource 2] (https://codesandbox.io/s/vigorous-rosalind-89qf6) - This is helped me add audio using html audio and React useRef. I'd recommend it to anyone still learning this concept.


## Author

- Github - [@Aik-202](https://github.com/Aik-202/aik-ecommerce-product-page.git)
- Frontend Mentor - [@Aik-202](https://www.frontendmentor.io/profile/Aik-202)
- Twitter - [@chiomaikogwe](https://www.twitter.com/chiomaikogwe)

