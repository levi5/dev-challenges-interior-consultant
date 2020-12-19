import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-area: HD;
	padding: 4.6rem;
	div {
		width: 11rem;
		font-family: 'Crimson Pro', serif;
		font-style: normal;
		font-weight: 200;
		font-size: 1.4rem;
		line-height: 1.6rem;
		text-transform: uppercase;
		border: 1px solid #fff;
		color: #fff;
		padding: 1rem;
	}

	.menu-bugger {
		padding: 1rem;
		border: 0;
		width: auto;
		display: none;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 600px) {
		padding: 1rem;
		nav {
			display: none;
		}
		.menu-bugger {
			display: flex;
		}
	}
`;
export default { Header };
