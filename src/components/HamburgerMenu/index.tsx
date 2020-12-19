import styles from './styles';
import { MdClose } from 'react-icons/md';

type Props = {
	showHideMenu(): void;
};
const HamburgerMenu: React.FC<Props> = ({ showHideMenu }) => {
	return (
		<styles.Content>
			<div className="top">
				<div className="menu-close" onClick={showHideMenu}>
					<MdClose size={24} color="#FFF" />
				</div>
			</div>
			<div className="content-menu">
				<nav>
					<ul>
						<li>
							<strong> Home</strong>
						</li>
						<li>Collection</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		</styles.Content>
	);
};

export default HamburgerMenu;
