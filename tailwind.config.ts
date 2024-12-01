import type { Config } from "tailwindcss";
import * as tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "primary-1": "#00a76f",
        "primary-2": "#004b50",
        "primary-3": "#007867",
        "primary-4": "#c8fad6",
        "primary-5": "#5be49b",
        "primary-6": "#122527",
        light1: "#f8fafc",
        light2: "#f1f5f9",
        light3: "#e2e8f0",
        dark1: "#141a21",
        dark2: "#182027",
        dark3: "#202831",
        "error-light": "#e11d48",
        "error-dark": "#f43f5e",
        border: {
          light: "#e2e8f0",
          dark: "#334155",
        },
        icon: {
          light: "#64748b",
          dark: "#94a3b8",
          hover: {
            light: "#0f172a",
            dark: "#e2e8f0",
          },
        },
      },
      boxShadow: {
        card: "0px 0px 2px 0px rgba(145,158,171,0.24), 0px 12px 24px -4px rgba(145,158,171,0.12)",
        dark: "0px 0px 2px 0px rgba(0,0,0,0.2), 0px 12px 24px -4px rgba(0,0,0,0.12)",
        dialog: "-40px 40px 80px rgba(0,0,0,0.24)",
        popoverContent: "-30px 30px 80px rgba(0,0,0,0.15)",
        dropdown:
          "0px 0px 2px 0px rgba(145,158,171,0.24), -20px 20px 40px -4px rgba(145,158,171,0.24)",
      },
      borderRadius: {
        card: "16px",
        dropdownBox: "10px",
        dropdownItem: "10px",
        product: "12px",
      },
      padding: {
        card: "24px",
        "sheet-content": "20px",
      },
      margin: {
        "page-heading": "20px",
      },
      gap: {
        dropdownItem: "16px",
      },
      fontSize: {
        "x-small": "10px",
        small: "13px",
        base: "15px",
        large: "24px",
        "x-large": "30px",
        "icon-size": "24px",
        "table-icon": "22px",
      },
    },
  },
  plugins: [tailwindAnimate],
};
export default config;
