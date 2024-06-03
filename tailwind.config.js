/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            "main-black": "#070707",
            "btn-green": "#00DE45",
            "main-green": "#00DE45",
         },
      },
   },
   plugins: [],
};
