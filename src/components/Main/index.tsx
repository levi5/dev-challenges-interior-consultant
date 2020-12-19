import * as styles from './styles';
import Header from '../Header/index';
import Content from 'components/Content';
import Footer from 'components/Footer';
import HamburgerMenu from '../HamburgerMenu/index';
import { useState } from 'react';

const Main = () => {
	const [showHide, setShowHide] = useState(false);
	function showHideMenu(): void {
		setShowHide(!showHide);
	}
	return (
		<styles.Wrapper show={showHide}>
			<Header showHideMenu={showHideMenu} />
			<Content />
			<Footer />
			{showHide && <HamburgerMenu showHideMenu={showHideMenu} />}
		</styles.Wrapper>
	);
};

export default Main;
