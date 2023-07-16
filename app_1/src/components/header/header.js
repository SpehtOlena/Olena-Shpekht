import './header.css';
import Logo from '../Logo/logo';
import Menu from '../menu/menu';

const menuItems = ['home', 'list', 'search'];


const Header = () => {
	return (
		<div className={"header"}>
			<div className="header_container">
				<Logo />
				<Menu menuItems={menuItems} />
			</div>
		</div>
	)
}

export default Header

