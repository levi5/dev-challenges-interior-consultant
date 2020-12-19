import styled from 'styled-components';

const Content = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: #181719;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 999;
	overflow: hidden;
	.top {
		padding: 1rem 1rem;
		width: 100%;
		height: auto;
		justify-content: flex-end;
		align-items: center;
	}
	.content-menu {
		width: 100%;
		height: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	nav,
	ul {
		flex-direction: column;
	}

	.menu-close {
		padding: 1rem;
		border: 0;
		width: auto;
		display: none;
		justify-content: flex-end;
	}

	@media (max-width: 600px) {
		.menu-close {
			display: flex;
		}
	}
`;

export default { Content };
