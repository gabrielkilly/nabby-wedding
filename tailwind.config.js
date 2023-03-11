/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'neutral': {
        1: "F9F6F0",
        2: "F8F8F8",
        3: "F4F3F0",
        4: "F1F1EF",
        5: "EAE9E1"
      },
      'moss': {
        100: '#EEF0EA',
        200: '#CFD5C1',
        300: '#A8BB7F',
        400: '#7D9B3D',
        500: '#60762F',
        600: '#455524',
      },
      'sky': {
        100: '#EBF2F5',
        200: '#B5D1E1',
        300: '#6DB0D6',
        400: '#1F7AAD',
        500: '#165274',
        600: '#13394F',
      },
      'gold': {
        100: '#F9F6F0',
        200: '#F1E8D1',
        300: '#EDD398',
        400: '#EFB329',
        500: '#CA951B',
        600: '#87661B',
      },
      'orange': {
        100: '#FAEDE9',
        200: '#FAD9CF',
        300: '#F19477',
        400: '#F95F2D',
        500: '#C63B0E',
        600: '#83290C',
      },
      'indigo': {
        100: '#F5F4F7',
        200: '#D9D8E2',
        300: '#8881BB',
        400: '#463F7F',
        500: '#3D3672',
        600: '#231D52',
      },
    },
  },
  plugins: [],
}
