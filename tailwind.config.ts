import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'space': ['Space Grotesk', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'chaos-gradient': {
					'0%, 100%': { 'background-position': '0% 50%' },
					'25%': { 'background-position': '100% 0%' },
					'50%': { 'background-position': '50% 100%' },
					'75%': { 'background-position': '0% 50%' }
				},
				'chaos-float': {
					'0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
					'25%': { transform: 'translateY(-20px) rotateZ(2deg)' },
					'50%': { transform: 'translateY(-10px) rotateZ(-1deg)' },
					'75%': { transform: 'translateY(-15px) rotateZ(1deg)' }
				},
				'chaos-spin': {
					'0%': { transform: 'rotateZ(0deg)' },
					'25%': { transform: 'rotateZ(90deg) scale(1.1)' },
					'50%': { transform: 'rotateZ(180deg) scale(1)' },
					'75%': { transform: 'rotateZ(270deg) scale(1.1)' },
					'100%': { transform: 'rotateZ(360deg) scale(1)' }
				},
				'rebel-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						'box-shadow': '0 0 0 0 hsl(285, 100%, 65% / 0.7)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						'box-shadow': '0 0 0 20px hsl(285, 100%, 65% / 0)'
					}
				},
				'electric-slide': {
					'0%': { transform: 'translateX(-100%) skewX(-15deg)' },
					'100%': { transform: 'translateX(200vw) skewX(-15deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'chaos-gradient': 'chaos-gradient 3s ease-in-out infinite',
				'chaos-float': 'chaos-float 4s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite',
				'chaos-spin': 'chaos-spin 8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite',
				'rebel-pulse': 'rebel-pulse 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
				'electric-slide': 'electric-slide 10s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
