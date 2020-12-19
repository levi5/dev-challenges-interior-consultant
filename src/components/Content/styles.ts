import styled from 'styled-components';

const Content = styled.div`
	max-width: 1366px;
	width: 100%;
	height: auto;
	grid-area: MN;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 16rem;
	section {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.left {
		width: 40%;
		padding: 3rem 5rem;
	}
	.left h1 {
		font-family: 'Lora', serif;
		font-style: normal;
		font-weight: normal;
		font-size: 4.8rem;
		line-height: 6.1rem;
		color: #ffffff;
	}
	.left p {
		margin: 2.4rem 0;
		max-width: 40rem;
		width: 100%;
		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 1.8rem;
		line-height: 2.9rem;
		color: #ffffff;
	}
	.left a {
		display: flex;
		align-items: center;
		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 1.8rem;
		line-height: 2.2rem;
		text-decoration: none;
		color: #ffffff;
	}
	.left a .next-icon {
		margin-top: 0.3rem;
		margin-left: 1rem;
	}
	.right {
		width: 60%;
		padding: 3rem 3rem 0 0;
	}
	.right .content-image {
		padding: 2rem 2rem 1rem 3rem;
		position: relative;
	}
	@media (max-width: 1222px) {
		display: flex;
		flex-direction: column;
		.left,
		.right {
			width: 100%;
		}
		.right {
			padding: 1rem;
			display: flex;
			justify-content: center;
		}
	}
	@media (max-width: 600px) {
		.left {
			padding: 4rem 1rem 2rem 1rem;
		}
		.left h1 {
			font-size: 3.6rem;
			line-height: 4.6rem;
		}
		.left {
			font-size: 1.4rem;
			line-height: 1.7rem;
		}
		.left a {
			font-size: 1.4rem;
			line-height: 1.7rem;
		}
		.right .content-image {
			padding: 0;
			position: relative;
		}
	}
`;

export default { Content };
