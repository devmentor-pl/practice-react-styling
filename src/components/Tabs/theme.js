import { css } from 'styled-components';

export default {
	tab: {
		disabled: css`
			color: #6c757d;
			background-color: transparent;
			border-color: transparent;
			cursor: default;
			pointer-events: none;
		`,

		isActive: css`
			color: #495057;
			background-color: #fff;
			border-color: #dee2e6 #dee2e6 #fff;

			&:hover {
				color: #495057;
				text-decoration: none;
				border-bottom: none;
				border-color: #dee2e6 #dee2e6 #fff;
			}
		`,
	},
};
