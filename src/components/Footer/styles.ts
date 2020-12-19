import styled from 'styled-components';

const Footer = styled.footer`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	h3 {
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 1.7rem;
		color: #a9a9a9;
	}
	@media (max-width: 600px) {
		div {
			padding: 1.4rem 1rem;
			border-top: 1px solid #fff;
		}
	}
`;

export default { Footer };
