module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			red: "#FF0000",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
