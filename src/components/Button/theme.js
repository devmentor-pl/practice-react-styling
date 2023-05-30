export default {
	primary: {
		backgroundColor: '#0d6efd',
		borderColor: '#0d6efd',
		color: '#fff',
		hover: {
			backgroundColor: '#0B5ED7',
			borderColor: '#0062cc',
		},
		active: {
			backgroundColor: '#0062CE',
			borderColor: '#005cbf',
		},
		disabled: {
			opacity: 0.65,
		},
		focus: {
			outline: 0,
			backgroundColor: '#0069d9',
			borderColor: '#0062cc',
			boxShadow: '0 0 0 0.2rem rgba(38,143,255,.5)',
		},
	},

	secondary: {
		backgroundColor: '#6c757d',
		borderColor: '#6c757d',
		color: '#fff',
		hover: {
			backgroundColor: '#5A6268',
			borderColor: '#545b62',
		},
		active: {
			backgroundColor: '#545b62',
			borderColor: '#4e555',
		},
		disabled: {
			opacity: 0.65,
		},
		focus: {
			outline: 0,

			backgroundColor: '#5a6268',
			borderColor: '#545b62',
			boxShadow: '0 0 0 0.2rem rgba(130,138,145,.5)',
		},
	},

	sm: {
		borderRadius: '0.25rem',
		fontSize: '0.875rem',
		padding: '0.25rem 0.5rem',
	},

	lg: {
		borderRadius: '0.3rem',
		fontSize: '1.25rem',
		padding: '0.5rem 1rem ',
	},
};
