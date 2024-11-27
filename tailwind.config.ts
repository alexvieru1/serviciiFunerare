import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontSize: {
  			xxs: 'clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)',
  			xs: 'clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)',
  			sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
  			md: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
  			lg: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
  			xl: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
  			'2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
  			'3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
  			'4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
  			'5xl': 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
  			'6xl': 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
  			'7xl': 'clamp(5.96rem, 10.2vw + 3.3rem, 11.5rem)',
  			'8xl': 'clamp(7.45rem, 13.8vw + 3.73rem, 14.5rem)',
  			'9xl': 'clamp(9.31rem, 17.8vw + 4.19rem, 17.5rem)'
  		},
  		screens: {
  			'4xs': '160px',
  			'3xs': '240px',
  			'2xs': '320px',
  			xs: '480px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			spotlight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate(-72%, -62%) scale(0.5)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate(-50%,-40%) scale(1)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			spotlight: 'spotlight 2s ease .75s 1 forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
