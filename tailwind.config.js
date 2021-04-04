const production = !process.env.ROLLUP_WATCH;

module.exports = {
	purge: {
		content: ["./src/**/*.svelte", "./public/**/*.html"],
		css: ["./public/**/*.css"],
		enabled: production,
	},

	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: "#3385FF",
			darkblue: "#0149b8",
			white: "#f7f8fb",
			purple: "#5052ae",
			grey: "#616163",
			red: "#f5091b",
		},
		extend: {
			backgroundImage: (theme) => ({
				splash: "url('/content/title_background.png')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
