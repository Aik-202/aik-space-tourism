/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
  },
  plugins: [],
}