import styled from 'styled-components';

const Card = styled.article`
	max-width: 45rem;
	min-width: 25rem;
	width: 100%;
	height: auto;
	min-height: 20rem;
	padding: 2rem;
	background: #181719;
	display: flex;
	position: absolute;
	top: 70%;
	bottom: 0;
	right: 0;
	margin: 7rem;
	color: #fff;
	p {
		margin-top: 1.5rem;
		max-width: 20rem;
		width: 100%;
		font-family: 'Lora', serif;
		font-style: normal;
		font-weight: bold;
		font-size: 2rem;
		line-height: 2.4rem;
	}
	h3 {
		font-weight: 500;
		font-size: 1.6rem;
		line-height: 1.7rem;
	}

	h5 {
		font-weight: 500;
		font-size: 1.1rem;
		line-height: 1.5rem;
	}

	.group-1 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
	.group-2 {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.img {
		border-radius: 50%;
	}
	.content-info {
		margin-left: 1rem;
		display: flex;
		flex-direction: column;
	}
	@media (max-width: 600px) {
		min-width: 10rem;
		position: absolute;
		width: 80%;
		margin: 0 10%;
		top: 85%;
		bottom: 0;
		right: 0;
		left: 0;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		p {
			min-width: 100%;
			margin-top: 1.5rem;
			max-width: 20rem;
			width: 100%;
		}
	}
`;

export default { Card };
