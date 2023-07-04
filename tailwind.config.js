const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			dark: colors.zinc,
			dim: colors.violet,
			bright: colors.amber,
			highlight: colors.cyan
		},
		fontFamily: {
			body: ['"VT323", monospace']
		},
		extend: {
			textShadow: {
				'glow':
					'0 0 7px currentColor, 0 0 10px currentColor, 0 0 42px #222, 0 0 82px #222, 0 0 92px #222, 0 0 102px #222, 0 0 151px #222;'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			);
		})
	]
};
