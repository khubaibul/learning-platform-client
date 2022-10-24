/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3cd15a",
        
"secondary": "#93ff9c",
        
"accent": "#ce048e",
        
"neutral": "#281A2D",
        
"base-100": "#F1F6F8",
        
"info": "#7E97DD",
        
"success": "#1FC15D",
        
"warning": "#E0B715",
        
"error": "#F26E8D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
