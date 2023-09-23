/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-mobile': "url(./src/Data/images/home/background-home-mobile.jpg)",
        'home-tablet': "url(./src/Data/images/home/background-home-tablet.jpg)",
        'home-desktop': "url(./src/Data/images/home/background-home-desktop.jpg)",

        'destination-mobile': "url(./src/Data/images/destination/background-destination-mobile.jpg)",
        'destination-tablet': "url(./src/Data/images/destination/background-destination-tablet.jpg)",
        'destination-desktop': "url(./src/Data/images/destination/background-destination-desktop.jpg)",

        'crew-mobile': "url(./src/Data/images/crew/background-crew-mobile.jpg)",
        'crew-tablet': "url(./src/Data/images/crew/background-crew-tablet.jpg)",
        'crew-desktop': "url(./src/Data/images/crew/background-crew-desktop.jpg)",

        'technology-mobile': "url(./src/Data/images/technology/background-technology-mobile.jpg)",
        'technology-tablet': "url(./src/Data/images/technology/background-technology-tablet.jpg)",
        'technology-desktop': "url(./src/Data/images/technology/background-technology-desktop.jpg)",

      }
    },
  },
  plugins: [],
}