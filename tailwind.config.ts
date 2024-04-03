import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  prefix: "",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
        darkpint: "#1E1E1E",
        bgwhitepint: "#F7F7F7",
        bluepint: {
          100: "#A4B1E0",
          200: "#7585D1",
          300: "#5264C3",
          400: "#334DAE",
          500: "#3B53A3",
          600: "#2D4293",
          700: "#27397D",
          800: "#202E66",
          900: "#18244E",
        },
        redpint: {
          100: "#FEB6BA",
          200: "#F09498",
          300: "#E66E74",
          400: "#DE484F",
          500: "#DA1F26",
          600: "#C2171E",
          700: "#AD131A",
          800: "#980F16",
          900: "#830B11",
        },
        // pinkcaritravel: {
        //   100: "#FFB7EB",
        //   200: "#FFA7DE",
        //   300: "#FF97D1",
        //   400: "#F986C4",
        //   500: "#F476B7",
        //   600: "#EE66A9",
        //   700: "#E6559C",
        //   800: "#E0458F",
        //   900: "#DC3482",
        // },
        // yellowcaritravel: "#FEA405",
        // purplecaritravel: "#A63CA7",
        // whitecaritravel: "#FDEFF5",
        // blackcaritravel: "#1A000C",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), "flowbite/plugin"],
} satisfies Config;

export default config;
