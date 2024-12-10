/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], // 'Pacifico' 설정 추가
      },
    },
  },
  plugins: [],
};
