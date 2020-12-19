import styled from 'styled-components';
type Props = {
	show: boolean;
};
const Wrapper = styled.div<Props>`
	width: 100%;
	height: 100%;
	display: grid;
	justify-content: center;
	grid-template-rows: 6rem auto 6rem;
	grid-template-areas: 'HD' 'MN' 'FT';
	overflow: ${(Props) => (Props.show ? 'hidden' : 'auto')};
`;

export { Wrapper };
