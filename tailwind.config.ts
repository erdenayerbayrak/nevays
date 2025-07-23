import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0099CC",
          50: "#E5F7FF",
          100: "#CCF0FF",
          200: "#99E0FF",
          300: "#66D1FF",
          400: "#33C2FF",
          500: "#0099CC",
          600: "#007AA3",
          700: "#005C7A",
          800: "#003D52",
          900: "#001F29",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#00B28A",
          50: "#E5FBF7",
          100: "#CCF7EF",
          200: "#99EFDF",
          300: "#66E7CF",
          400: "#33DFBF",
          500: "#00B28A",
          600: "#008F6E",
          700: "#006B52",
          800: "#004737",
          900: "#00241B",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // NEVAYS Brand Colors
        brand: {
          primary: "#0099CC",
          secondary: "#00B28A",
          dark: "#101418",
          light: "#F6F8FA",
        },
        neutral: {
          dark: "#101418",
          light: "#F6F8FA",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['IBM Plex Sans', 'sans-serif'],
      },
      fontWeight: {
        body: '400',
        'body-bold': '700',
        heading: '600',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.25s ease-out",
        "slide-up": "slide-up 0.25s ease-out",
        "scale-hover": "scale-hover 0.25s ease-out",
        "counter": "counter 2s ease-out",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-hover": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.03)" },
        },
        "counter": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config