// Rebuild tailwind.css after changing classes in index.html:
// npx tailwindcss@3.4.16 -i tailwind.input.css -o tailwind.css --minify
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'] },
      colors: {
        forest: { 950: '#0E2A1F', 900: '#143828', 800: '#1C4A35', 700: '#2A6246' },
        leaf: '#3F9A63',
        yolk: { DEFAULT: '#F2B632', soft: '#FBE7B2' },
        cream: { DEFAULT: '#F7F3E8', deep: '#EDE6D3' },
        butter: '#FCEBC0',
        sage: '#DCE9DA',
        ink: '#17231C',
        muted: '#55635A',
        mist: '#B7C9BD'
      }
    }
  }
};
