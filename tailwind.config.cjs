/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
				serif: ['Josefin Sans', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
