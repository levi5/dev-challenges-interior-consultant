import { MdMenu } from 'react-icons/md';
import style from './styles';

type Props = {
	showHideMenu(): void;
};

const Header: React.FC<Props> = ({ showHideMenu }) => {
	return (
		<style.Header>
			<div>This Interior</div>
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
			<div className="menu-bugger" onClick={showHideMenu}>
				<MdMenu size={24} />
			</div>
		</style.Header>
	);
};
export default Header;
