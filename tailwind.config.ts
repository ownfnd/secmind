import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617", // slate-950
                foreground: "#f8fafc", // slate-50
                primary: {
                    DEFAULT: "#0ea5e9", // sky-500
                    foreground: "#0f172a",
                },
                secondary: {
                    DEFAULT: "#8b5cf6", // violet-500
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#10b981", // emerald-500
                    foreground: "#0f172a",
                },
                destructive: {
                    DEFAULT: "#ef4444", // red-500
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#1e293b", // slate-800
                    foreground: "#94a3b8", // slate-400
                },
                card: {
                    DEFAULT: "#0f172a", // slate-900
                    foreground: "#f8fafc", // slate-50
                },
            },
            backgroundImage: {
                "cyber-grid": "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
export default config;
